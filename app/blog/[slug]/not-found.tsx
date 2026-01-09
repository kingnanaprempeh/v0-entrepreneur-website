import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl text-slate-400 mb-8">Blog post not found</p>
        <Link href="/blog" className="text-[#36b294] hover:underline text-lg">
          Return to Blog
        </Link>
      </div>
    </div>
  )
}
