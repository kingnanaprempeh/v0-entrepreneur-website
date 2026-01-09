"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useState, useMemo } from "react"
import Link from "next/link"

export default function UploadFilePage() {
  const supabase = useMemo(() => createClient(), [])

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState("")
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setError("Please select a file to upload")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      setUploadProgress("Authenticating...")
      const { data: userData } = await supabase.auth.getUser()
      if (!userData.user) throw new Error("Not authenticated")

      setUploadProgress("Uploading file to cloud storage...")
      // Upload file to Blob
      const formData = new FormData()
      formData.append("file", file)

      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!uploadResponse.ok) throw new Error("File upload failed")

      const uploadData = await uploadResponse.json()

      setUploadProgress("Saving file information to database...")
      // Save file metadata to Supabase
      const { error: insertError } = await supabase.from("downloadable_files").insert({
        title,
        description,
        file_url: uploadData.url,
        file_name: uploadData.filename,
        file_size: uploadData.size,
        file_type: uploadData.type,
        author_id: userData.user.id,
      })

      if (insertError) throw insertError

      setUploadProgress("Complete!")
      router.push("/admin/files")
      router.refresh()
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
      setUploadProgress("")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Upload New File</h1>
          <Link href="/admin/files">
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
              Cancel
            </Button>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <div className="space-y-6">
            <div>
              <Label htmlFor="title" className="text-white">
                File Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter file title"
                required
                className="bg-slate-700 border-slate-600 text-white mt-2"
              />
            </div>

            <div>
              <Label htmlFor="description" className="text-white">
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of the file"
                rows={4}
                className="bg-slate-700 border-slate-600 text-white mt-2"
              />
            </div>

            <div>
              <Label htmlFor="file" className="text-white">
                File
              </Label>
              <Input
                id="file"
                type="file"
                onChange={handleFileChange}
                required
                className="bg-slate-700 border-slate-600 text-white mt-2"
              />
              {file && (
                <p className="text-sm text-slate-400 mt-2">
                  Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              )}
            </div>

            {uploadProgress && <p className="text-sm text-[#36b294]">{uploadProgress}</p>}

            {error && <p className="text-sm text-red-400">{error}</p>}

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading} className="bg-[#36b294] hover:bg-[#2a8a73] text-white">
                {isLoading ? "Uploading..." : "Upload File"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
