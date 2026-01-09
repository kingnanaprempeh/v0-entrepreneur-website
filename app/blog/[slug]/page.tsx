import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient()
  const { slug } = params

  const { data: blog } = await supabase.from("blog_posts").select("*").eq("slug", slug).eq("published", true).single()

  if (!blog) {
    notFound()
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
        <article className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-[#36b294] hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{blog.title}</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <time>{new Date(blog.created_at).toLocaleDateString()}</time>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="whitespace-pre-wrap text-slate-300 leading-relaxed">{blog.content}</div>
          </div>

          <footer className="mt-12 pt-8 border-t border-slate-700">
            <Link href="/blog" className="text-[#36b294] hover:underline">
              ← Back to all posts
            </Link>
          </footer>
        </article>
      </div>
    </div>
  )
}
