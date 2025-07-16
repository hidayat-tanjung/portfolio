"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Shield, Code, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "./navbar"
import Image from "next/image"

export default function Hero() {
  const [text, setText] = useState("")
  const roles = ["HR Professional", "IT Technician", "Junior Cyber Security", "Linux Sysadmin"]
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

      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pt-16 sm:pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Profile Image - Mobile First */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 scale-110"></div>

              {/* Profile image container - Keep circular but adjust positioning */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 sm:border-8 border-white dark:border-slate-800 shadow-2xl">
                <Image
                  src="/images/marlin-profile.jpg"
                  alt="Marlin Hidayat Tanjung - Professional Profile"
                  fill
                  className="object-cover object-[center_20%]"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                />
              </div>

              {/* Floating elements - Adjusted for mobile */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-blue-600 text-white p-2 sm:p-3 rounded-full shadow-lg"
              >
                <Shield className="h-4 w-4 sm:h-6 sm:w-6" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-green-600 text-white p-2 sm:p-3 rounded-full shadow-lg"
              >
                <Code className="h-4 w-4 sm:h-6 sm:w-6" />
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-3 sm:-right-6 bg-purple-600 text-white p-2 sm:p-3 rounded-full shadow-lg"
              >
                <Users className="h-4 w-4 sm:h-6 sm:w-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                I'm <span className="text-blue-600 dark:text-blue-400">Marlin Hidayat Tanjung</span>
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-600 dark:text-slate-300 block mt-2">
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
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                Passionate graduate in Management Dakwah with expertise in HR, IT systems, cybersecurity, and
                organizational leadership. Dedicated to bridging technology and human resources for optimal
                organizational performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg h-12 sm:h-auto shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    Get In Touch
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 sm:px-8 py-3 text-base sm:text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white h-12 sm:h-auto shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group bg-transparent"
                  onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <motion.span
                      className="ml-2"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      ⚡
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            y: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 400, damping: 17 },
          }}
        >
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600 dark:text-slate-300" />
        </motion.button>
      </motion.div>
    </section>
  )
}
