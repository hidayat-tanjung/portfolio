"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200/20 dark:border-slate-700/20"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Marlin<span className="text-blue-600 dark:text-blue-400">Tanjung</span>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-all duration-200"
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button size="sm" className="ml-2 bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden bg-white dark:bg-slate-900 shadow-lg border-t border-slate-200 dark:border-slate-700`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800"
            >
              {link.name}
            </button>
          ))}
          <div className="px-3 py-2">
            <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
