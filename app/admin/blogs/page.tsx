import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function BlogsListPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  const { data: blogs } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("author_id", data.user.id)
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Manage Blog Posts</h1>
          <div className="flex gap-4">
            <Link href="/admin/blogs/new">
              <Button className="bg-[#36b294] hover:bg-[#2a8a73] text-white">Create New Post</Button>
            </Link>
            <Link href="/admin">
              <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 bg-transparent">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          {blogs && blogs.length > 0 ? (
            <div className="divide-y divide-slate-700">
              {blogs.map((blog) => (
                <div key={blog.id} className="p-6 hover:bg-slate-750">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                      <p className="text-slate-400 text-sm mb-2">{blog.excerpt}</p>
                      <div className="flex gap-4 text-sm text-slate-500">
                        <span>{blog.published ? "Published" : "Draft"}</span>
                        <span>•</span>
                        <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/admin/blogs/edit/${blog.id}`}>
                        <Button size="sm" className="bg-[#36b294] hover:bg-[#2a8a73] text-white">
                          Edit
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400">No blog posts yet. Create your first post!</div>
          )}
        </div>
      </div>
    </div>
  )
}
