"use client"

import { Button } from "@/components/ui/button"
import { Menu, Instagram, Twitter, Linkedin, Youtube, Headphones, Facebook } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-800 text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-slate-800/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="flex justify-between items-center">
          <div className="text-xl font-light tracking-wider">
            <span className="text-white">KING</span>
            <span className="text-[#36b294]">NANA</span>
            <span className="text-white">PREMPEH</span>
            <span className="text-[#36b294] text-sm ml-1">™</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 mr-6">
              <Link href="/blog" className="text-gray-300 hover:text-[#36b294] transition-colors font-light">
                Blog
              </Link>
              <Link href="/downloads" className="text-gray-300 hover:text-[#36b294] transition-colors font-light">
                Downloads
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-[#36b294] transition-colors font-light">
                Contact
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://instagram.com/kingnanaprempeh"
                className="text-gray-400 hover:text-[#36b294] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/kingnanaprempeh"
                className="text-gray-400 hover:text-[#36b294] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/kingnanaprempeh"
                className="text-gray-400 hover:text-[#36b294] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com/@kingnanaprempeh"
                className="text-gray-400 hover:text-[#36b294] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com/kingnanaprempeh"
                className="text-gray-400 hover:text-[#36b294] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="text-[#36b294] hover:bg-[#36b294]/10">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Split Layout */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Text Content - Left Side */}
            <div className="space-y-8 lg:pr-8">
              <h1 className="text-5xl md:text-6xl font-light tracking-wide whitespace-nowrap">
                <span className="text-[#36b294] font-normal">@kingnanaprempeh</span>
              </h1>

              <div className="max-w-none">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light text-justify">
                  Nana, a devoted husband and father, is a seasoned serial entrepreneur with over 10 years of
                  experience. He has co-founded three companies in Fintech, AgriTech, and Asset Financing, focusing on
                  high-growth solutions to empower underserved markets in Africa. His efforts target challenges like
                  food systems, financial and market access, hunger, and climate change. He also hosts a podcast, Build
                  That Business!, featuring young African business and civil leaders.
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <h3 className="text-lg font-light text-white mb-4">Listen to My Podcast</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://open.spotify.com/show/4TEndhLgGoyg8dNaKNRBeP"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-full font-medium transition-colors text-lg"
                  >
                    <Headphones className="w-6 h-6" />
                    <span>Listen on Spotify</span>
                  </Link>
                  <Link
                    href="https://podcasts.apple.com/sn/podcast/build-that-business/id1832506663"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FA233B] to-[#FB5C74] hover:from-[#e91e63] hover:to-[#f06292] text-white rounded-full font-medium transition-colors text-lg"
                  >
                    <Headphones className="w-6 h-6" />
                    <span>Listen on Apple</span>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-[#36b294] mb-2">4</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">African Markets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[#36b294] mb-2">10+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[#36b294] mb-2">10K+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Social Follows</div>
                </div>
              </div>
            </div>

            {/* Portrait Image - Right Side */}
            <div className="relative lg:block hidden">
              <div className="relative w-full max-w-3xl ml-auto aspect-auto bg-slate-800 rounded-lg p-6">
                <img
                  src="/nana-studio-portrait.png"
                  alt="King Nana Prempeh - Professional Studio Portrait"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Mobile Portrait - Full Width on Small Screens */}
            <div className="lg:hidden relative w-full max-w-xl mx-auto aspect-auto mt-8 bg-slate-800 rounded-lg p-6">
              <img
                src="/nana-studio-portrait.png"
                alt="King Nana Prempeh - Professional Studio Portrait"
                className="w-full h-full object-contain"
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
                Transforming Agriculture,
                <span className="text-[#36b294] block">Building Food Security</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Through GrowForMe's Pan-African growth strategy, I'm revolutionizing how farmers access markets, inputs,
                training, insurance, loans and savings. As a Mandela Washington Fellow and MEST alumnus, I'm working to
                eliminate post-harvest losses and modernize African agriculture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#36b294] hover:bg-[#2a8a73] text-white px-8 py-3">Learn About GrowForMe</Button>
                <Button
                  variant="outline"
                  className="border-[#36b294] text-[#36b294] hover:bg-[#36b294]/10 px-8 py-3 bg-transparent"
                >
                  Contact Me
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-light text-[#36b294] mb-2">4</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">African Markets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[#36b294] mb-2">1st</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Pan-African Church Software</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[#36b294] mb-2">1st</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Crowdfunding Regulations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[#36b294] mb-2">1st</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Million Raised In Crowdfunding</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[#36b294] mb-2">MTN</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Mobile Money Partner</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-[#36b294] mb-2">Telecel</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Mobile Money Partner</div>
                </div>
                <div className="text-center col-span-2">
                  <div className="text-3xl font-light text-[#36b294] mb-2">10K+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Social Media Follows</div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6 mt-8">
                <h3 className="text-xl font-light text-white mb-4">Build That Business Podcast</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Join me on "Build That Business" where I share insights on entrepreneurship, technology, and building
                  successful ventures in Africa. Available on all major podcast platforms.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="https://open.spotify.com/show/4TEndhLgGoyg8dNaKNRBeP"
                    className="flex items-center gap-3 px-6 py-3 bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-lg font-medium transition-colors"
                  >
                    <Headphones className="w-5 h-5" />
                    <span>Spotify</span>
                  </Link>
                  <Link
                    href="https://podcasts.apple.com/sn/podcast/build-that-business/id1832506663"
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#FA233B] to-[#FB5C74] hover:from-[#e91e63] hover:to-[#f06292] text-white rounded-lg font-medium transition-colors"
                  >
                    <Headphones className="w-5 h-5" />
                    <span>Apple Podcasts</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20" id="contact">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-8">Ready to Transform African Agriculture?</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Connect with me to explore partnerships, speaking opportunities, or to discuss how GrowForMe can help
            transform agricultural value chains across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#36b294] hover:bg-[#2a8a73] text-white px-8 py-3"
              onClick={() => (window.location.href = "mailto:nana@growforme.com")}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 bg-transparent"
              onClick={() => (window.location.href = "tel:+233242561793")}
            >
              Call Now
            </Button>
          </div>
          <div className="mt-8 space-y-2 text-gray-400">
            <p>Email: nana@growforme.com</p>
            <p>Phone: +233 242 561 793</p>
            <p>WhatsApp: +233 504 561 793</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-gray-700">
            <Link
              href="https://instagram.com/kingnanaprempeh"
              className="flex items-center gap-2 px-6 py-3 bg-[#36b294]/20 border border-[#36b294]/30 rounded-full text-white hover:bg-[#36b294]/30 transition-colors"
            >
              <Instagram className="w-5 h-5 text-[#36b294]" />
              <span>Follow</span>
            </Link>
            <Link
              href="https://twitter.com/kingnanaprempeh"
              className="flex items-center gap-2 px-6 py-3 bg-[#36b294]/20 border border-[#36b294]/30 rounded-full text-white hover:bg-[#36b294]/30 transition-colors"
            >
              <Twitter className="w-5 h-5 text-[#36b294]" />
              <span>Follow</span>
            </Link>
            <Link
              href="https://linkedin.com/in/kingnanaprempeh"
              className="flex items-center gap-2 px-6 py-3 bg-[#36b294]/20 border border-[#36b294]/30 rounded-full text-white hover:bg-[#36b294]/30 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-[#36b294]" />
              <span>Connect</span>
            </Link>
            <Link
              href="https://facebook.com/kingnanaprempeh"
              className="flex items-center gap-2 px-6 py-3 bg-[#36b294]/20 border border-[#36b294]/30 rounded-full text-white hover:bg-[#36b294]/30 transition-colors"
            >
              <Facebook className="w-5 h-5 text-[#36b294]" />
              <span>Follow</span>
            </Link>
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
                  className="text-gray-400 hover:text-[#36b294] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="https://twitter.com/kingnanaprempeh"
                  className="text-gray-400 hover:text-[#36b294] transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="https://linkedin.com/in/kingnanaprempeh"
                  className="text-gray-400 hover:text-[#36b294] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="https://youtube.com/@kingnanaprempeh"
                  className="text-gray-400 hover:text-[#36b294] transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </Link>
                <Link
                  href="https://facebook.com/kingnanaprempeh"
                  className="text-gray-400 hover:text-[#36b294] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
              </div>
              <div className="hidden md:flex gap-6">
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-[#36b294] transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-[#36b294] transition-colors">
                  Terms
                </Link>
                <Link href="#contact" className="text-sm text-gray-400 hover:text-[#36b294] transition-colors">
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
