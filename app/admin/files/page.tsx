import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function FilesListPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const { data: files } = await supabase
    .from("downloadable_files")
    .select("*")
    .eq("author_id", data.user.id)
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Manage Files</h1>
          <div className="flex gap-4">
            <Link href="/admin/files/upload">
              <Button className="bg-[#36b294] hover:bg-[#2a8a73] text-white">Upload New File</Button>
            </Link>
            <Link href="/admin">
              <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          {files && files.length > 0 ? (
            <div className="divide-y divide-slate-700">
              {files.map((file) => (
                <div key={file.id} className="p-6 hover:bg-slate-750">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2">{file.title}</h2>
                      <p className="text-slate-400 text-sm mb-2">{file.description}</p>
                      <div className="flex gap-4 text-sm text-slate-500">
                        <span>{file.file_name}</span>
                        <span>•</span>
                        <span>
                          {file.file_size ? `${(file.file_size / 1024 / 1024).toFixed(2)} MB` : "Unknown size"}
                        </span>
                        <span>•</span>
                        <span>{file.download_count || 0} downloads</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a href={file.file_url} download className="inline-block">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600 text-white hover:bg-slate-700 bg-transparent"
                        >
                          Download
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400">No files uploaded yet. Upload your first file!</div>
          )}
        </div>
      </div>
    </div>
  )
}
