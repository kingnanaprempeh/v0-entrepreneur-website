import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function AdminPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const { count: blogCount } = await supabase.from("blog_posts").select("*", { count: "exact", head: true })

  const { count: fileCount } = await supabase.from("downloadable_files").select("*", { count: "exact", head: true })

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <form action="/auth/signout" method="post">
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
              Sign Out
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-2">Blog Posts</h2>
            <p className="text-4xl font-bold text-[#36b294] mb-4">{blogCount || 0}</p>
            <Link href="/admin/blogs">
              <Button className="bg-[#36b294] hover:bg-[#2a8a73] text-white">Manage Blogs</Button>
            </Link>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-semibold mb-2">Downloadable Files</h2>
            <p className="text-4xl font-bold text-[#36b294] mb-4">{fileCount || 0}</p>
            <Link href="/admin/files">
              <Button className="bg-[#36b294] hover:bg-[#2a8a73] text-white">Manage Files</Button>
            </Link>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex gap-4">
            <Link href="/admin/blogs/new">
              <Button className="bg-[#36b294] hover:bg-[#2a8a73] text-white">Create New Blog Post</Button>
            </Link>
            <Link href="/admin/files/upload">
              <Button className="bg-[#36b294] hover:bg-[#2a8a73] text-white">Upload New File</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
