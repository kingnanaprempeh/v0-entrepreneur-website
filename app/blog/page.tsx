import { createClient } from "@/lib/supabase/server"
import Link from "next/link"

export default async function BlogPage() {
  const supabase = await createClient()

  const { data: blogs } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Blog</h1>
          <p className="text-xl text-slate-400 mb-12">
            Insights on entrepreneurship, technology, and building businesses in Africa
          </p>

          {blogs && blogs.length > 0 ? (
            <div className="space-y-8">
              {blogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`}>
                  <article className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-[#36b294] transition-colors">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white hover:text-[#36b294] transition-colors">
                      {blog.title}
                    </h2>
                    {blog.excerpt && <p className="text-slate-400 mb-4">{blog.excerpt}</p>}
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <time>{new Date(blog.created_at).toLocaleDateString()}</time>
                      <span className="text-[#36b294]">Read more →</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-slate-800 p-12 rounded-lg border border-slate-700 text-center">
              <p className="text-slate-400 text-lg">No blog posts published yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
