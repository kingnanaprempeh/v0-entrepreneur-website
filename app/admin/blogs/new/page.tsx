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

export default function NewBlogPage() {
  const supabase = useMemo(() => createClient(), [])

  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [published, setPublished] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleTitleChange = (value: string) => {
    setTitle(value)
    const generatedSlug = value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
    setSlug(generatedSlug)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { data: userData } = await supabase.auth.getUser()
      if (!userData.user) throw new Error("Not authenticated")

      const { error: insertError } = await supabase.from("blog_posts").insert({
        title,
        slug,
        content,
        excerpt,
        published,
        author_id: userData.user.id,
      })

      if (insertError) throw insertError

      router.push("/admin/blogs")
      router.refresh()
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Create New Blog Post</h1>
          <Link href="/admin/blogs">
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
              Cancel
            </Button>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <div className="space-y-6">
            <div>
              <Label htmlFor="title" className="text-white">
                Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Enter blog title"
                required
                className="bg-slate-700 border-slate-600 text-white mt-2"
              />
            </div>

            <div>
              <Label htmlFor="slug" className="text-white">
                Slug (URL)
              </Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="blog-post-url"
                required
                className="bg-slate-700 border-slate-600 text-white mt-2"
              />
            </div>

            <div>
              <Label htmlFor="excerpt" className="text-white">
                Excerpt
              </Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief description of the blog post"
                rows={3}
                className="bg-slate-700 border-slate-600 text-white mt-2"
              />
            </div>

            <div>
              <Label htmlFor="content" className="text-white">
                Content
              </Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog content here..."
                rows={15}
                required
                className="bg-slate-700 border-slate-600 text-white mt-2"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="published"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="w-4 h-4"
              />
              <Label htmlFor="published" className="text-white cursor-pointer">
                Publish immediately
              </Label>
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <div className="flex gap-4">
              <Button type="submit" disabled={isLoading} className="bg-[#36b294] hover:bg-[#2a8a73] text-white">
                {isLoading ? "Creating..." : "Create Blog Post"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
