import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// SVG Icon Components
const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
)

export default async function DownloadsPage() {
  const supabase = await createClient()

  const { data: files } = await supabase
    .from("downloadable_files")
    .select("*")
    .order("created_at", { ascending: false })

  const handleDownload = async (fileId: string) => {
    // This will be handled client-side
    return fileId
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#36b294]">
            @kingnanaprempeh
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/blog" className="text-white hover:text-[#36b294] transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="text-white hover:text-[#36b294] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Downloads</h1>
          <p className="text-xl text-slate-400 mb-12">Free resources and materials to help you build your business</p>

          {files && files.length > 0 ? (
            <div className="space-y-6">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-[#36b294] transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2 text-white">{file.title}</h2>
                      {file.description && <p className="text-slate-400 mb-3">{file.description}</p>}
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <span>{file.file_name}</span>
                        {file.file_size && (
                          <>
                            <span>•</span>
                            <span>{(file.file_size / 1024 / 1024).toFixed(2)} MB</span>
                          </>
                        )}
                        <span>•</span>
                        <span>{file.download_count || 0} downloads</span>
                      </div>
                    </div>
                    <a href={file.file_url} download target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#36b294] hover:bg-[#2a8a73] text-white flex items-center gap-2">
                        <DownloadIcon />
                        Download
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-slate-800 p-12 rounded-lg border border-slate-700 text-center">
              <p className="text-slate-400 text-lg">No files available for download yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
