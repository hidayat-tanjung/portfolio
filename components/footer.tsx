"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23334155%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <button
              onClick={() => scrollToSection("#home")}
              className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors"
            >
              Marlin<span className="text-blue-400">Tanjung</span>
            </button>
            <p className="text-slate-400 mb-4 leading-relaxed">
              HR Professional & IT Technician specializing in cybersecurity, system administration, and organizational
              management. Bridging technology and human resources for optimal performance.
            </p>
            <div className="flex items-center text-slate-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-2 text-red-500 fill-current" />
              <span>in Indonesia</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-400 hover:text-blue-400 transition-colors text-left py-1"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-slate-400">
              <p>📧 marlinhidayattanjung@gmail.com</p>
              <p>📱 +62 85119062492</p>
              <p>📍 Indonesia</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500">Available for remote work and collaboration</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Marlin Hidayat Tanjung. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-slate-500 text-sm">Built with Next.js & Tailwind CSS</span>
            <Button
              onClick={scrollToTop}
              size="sm"
              variant="outline"
              className="border-slate-600 text-slate-400 hover:text-white hover:border-blue-400"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
