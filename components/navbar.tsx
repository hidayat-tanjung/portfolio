"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  X,
  Moon,
  Sun,
  Download,
  Home,
  User,
  Briefcase,
  Wrench,
  FolderOpen,
  GraduationCap,
  Mail,
} from "lucide-react"
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Tools", href: "#skills", icon: Wrench },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
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
                className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Marlin<span className="text-blue-600 dark:text-blue-400">Tanjung</span>
              </button>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navLinks.map((link) => {
                  const IconComponent = link.icon
                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-all duration-200"
                    >
                      <IconComponent className="h-4 w-4" />
                      {link.name}
                    </button>
                  )
                })}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="ml-2"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
                <Button
                  size="sm"
                  className="ml-2 bg-blue-600 hover:bg-blue-700"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/uc?export=download&id=1fciuXiOWjNZpIsUdErIHB0cFftPNL7f_",
                      "_blank",
                    )
                  }
                >
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>

            <div className="flex md:hidden items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-10 w-10"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none z-50 relative"
              >
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className="md:hidden">
        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-6">
              <nav className="px-6 space-y-2">
                {navLinks.map((link, index) => {
                  const IconComponent = link.icon
                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="flex items-center gap-4 w-full text-left px-4 py-4 rounded-xl text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800 transition-all duration-200 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="flex-1">{link.name}</span>
                      <div className="w-2 h-2 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-200 dark:border-slate-700">
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 h-12 shadow-lg"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/uc?export=download&id=1fciuXiOWjNZpIsUdErIHB0cFftPNL7f_",
                    "_blank",
                  )
                  setIsOpen(false)
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
