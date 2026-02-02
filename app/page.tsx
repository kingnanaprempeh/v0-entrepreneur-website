import { Button } from "@/components/ui/button"
import { Menu, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-800 text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-light tracking-wider">
            <span className="text-white">KING</span>
            <span className="text-pink-400">NANA</span>
            <span className="text-white">PREMPEH</span>
            <span className="text-pink-400 text-sm ml-1">™</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://instagram.com/kingnanaprempeh"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/kingnanaprempeh"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/kingnanaprempeh"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com/@kingnanaprempeh"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="text-pink-400 hover:bg-pink-400/10">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Split Layout */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Text Content - Left Side */}
            <div className="space-y-8 lg:pr-8">
              <h1 className="text-6xl md:text-8xl font-light tracking-wide">
                <span className="block text-pink-400 font-normal">King Nana</span>
                <span className="block text-white font-light">Prempeh</span>
              </h1>

              <div className="text-pink-400 text-xl font-light tracking-wider">@kingnanaprempeh</div>

              <div className="max-w-none">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                  King Nana Prempeh is one of the world's leading experts in leadership and workplace culture, teaching
                  leaders how to unlock their full potential and help their teams succeed and build strong and resilient
                  organizations.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="https://instagram.com/kingnanaprempeh"
                  className="flex items-center gap-2 px-6 py-3 bg-pink-400/20 border border-pink-400/30 rounded-full text-white hover:bg-pink-400/30 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-pink-400" />
                  <span>Follow</span>
                </Link>
                <Link
                  href="https://twitter.com/kingnanaprempeh"
                  className="flex items-center gap-2 px-6 py-3 bg-pink-400/20 border border-pink-400/30 rounded-full text-white hover:bg-pink-400/30 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-pink-400" />
                  <span>Follow</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/kingnanaprempeh"
                  className="flex items-center gap-2 px-6 py-3 bg-pink-400/20 border border-pink-400/30 rounded-full text-white hover:bg-pink-400/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-pink-400" />
                  <span>Connect</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-light text-pink-400 mb-2">500K+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Podcast Downloads</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-pink-400 mb-2">10K+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Leaders Trained</div>
                </div>
              </div>
            </div>

            {/* Portrait Image - Right Side */}
            <div className="relative lg:block hidden">
              <div className="relative w-full max-w-3xl ml-auto aspect-[3/4]">
                <img
                  src="/nana-main-picture.png"
                  alt="King Nana Prempeh - Professional Portrait"
                  className="w-full h-full object-contain rounded-lg scale-125"
                />
              </div>
            </div>

            {/* Mobile Portrait - Full Width on Small Screens */}
            <div className="lg:hidden relative w-full max-w-xl mx-auto aspect-[3/4] mt-8">
              <img
                src="/nana-main-picture.png"
                alt="King Nana Prempeh - Professional Portrait"
                className="w-full h-full object-contain rounded-lg scale-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Content Section */}
      <section className="relative bg-gray-900/50 backdrop-blur-sm py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-white">
                Transforming Leaders,
                <span className="text-pink-400 block">Building Futures</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Through my podcast, training programs, and speaking engagements, I help entrepreneurs and leaders
                develop the mindset and skills needed to build breakthrough businesses and create lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3">Listen to Podcast</Button>
                <Button
                  variant="outline"
                  className="border-pink-400 text-pink-400 hover:bg-pink-400/10 px-8 py-3 bg-transparent"
                >
                  View Programs
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-light text-pink-400 mb-2">500K+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Podcast Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-pink-400 mb-2">10K+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Leaders Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-pink-400 mb-2">50+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Speaking Events</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-pink-400 mb-2">25+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Countries Reached</div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-lg font-light text-white mb-4 text-center">Connect & Engage</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-light text-pink-400 mb-1">50K+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Social Followers</div>
                  </div>
                  <div>
                    <div className="text-xl font-light text-pink-400 mb-1">1M+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Content Views</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-8">Ready to Transform Your Leadership?</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Connect with me to explore speaking opportunities, coaching programs, or to discuss how we can work together
            to unlock your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3">Get In Touch</Button>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 bg-transparent"
            >
              View Speaking Topics
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-400">© 2024 King Nana Prempeh. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <Link
                  href="https://instagram.com/kingnanaprempeh"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="https://twitter.com/kingnanaprempeh"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="https://linkedin.com/in/kingnanaprempeh"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="https://youtube.com/@kingnanaprempeh"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </Link>
              </div>
              <div className="hidden md:flex gap-6">
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
                  Terms
                </Link>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
