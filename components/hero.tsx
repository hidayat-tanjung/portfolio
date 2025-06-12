"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Shield, Code, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "./navbar"

export default function Hero() {
  const [text, setText] = useState("")
  const roles = ["HR Professional", "IT Technician", "Cyber Security Expert", "Bug Hunter", "Linux Sysadmin"]
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setText(currentRole.slice(0, charIndex - 1))
              charIndex--
            } else {
              clearInterval(deleteInterval)
              setRoleIndex((prev) => (prev + 1) % roles.length)
            }
          }, 50)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [roleIndex])

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      <Navbar />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40"></div>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex justify-center space-x-4 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full">
                <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h2 className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 mb-4">
              Welcome to my digital portfolio
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              I'm <span className="text-blue-600 dark:text-blue-400">Marlin Hidayat</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-600 dark:text-slate-300">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Passionate graduate in Management Dakwah with expertise in HR, IT systems, cybersecurity, and
              organizational leadership. Dedicated to bridging technology and human resources for optimal organizational
              performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20"
              onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToNext}
          className="animate-bounce p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow"
        >
          <ChevronDown className="h-6 w-6 text-slate-600 dark:text-slate-300" />
        </button>
      </motion.div>
    </section>
  )
}
