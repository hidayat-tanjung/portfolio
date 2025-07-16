"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, Phone, MapPin, Award, Target } from "lucide-react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [projectCount, setProjectCount] = useState(0)
  const [loading, setLoading] = useState(true)

  // Fetch GitHub repositories count
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/hidayat-tanjung/repos?per_page=100")
        if (response.ok) {
          const repos = await response.json()
          // Filter out forked repositories to get only original projects
          const originalRepos = repos.filter((repo: any) => !repo.fork)
          setProjectCount(originalRepos.length)
        } else {
          // Fallback to static number if API fails
          setProjectCount(15)
        }
      } catch (error) {
        console.error("Error fetching GitHub repos:", error)
        // Fallback to static number if API fails
        setProjectCount(15)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubRepos()
  }, [])

  const stats = [
    { label: "Years Experience", value: "8+", icon: Award },
    {
      label: "Projects Completed",
      value: loading ? "..." : `${projectCount}+`,
      icon: Target,
    },
    { label: "Happy Clients", value: "25+", icon: User },
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover my journey, skills, and passion for technology and human resources
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900/30">
                    <Image
                      src="/images/marlin-profile.jpg"
                      alt="Marlin Hidayat Tanjung"
                      fill
                      className="object-cover object-[center_20%]"
                      sizes="192px"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                    Marlin Hidayat Tanjung, S.Sos
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">HR Professional & IT Technician</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Specializing in cybersecurity, system administration, and organizational management
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">My Story</h3>
                <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <p>
                    I'm Marlin Hidayat Tanjung, a passionate graduate of Management Dakwah with a strong foundation in
                    organizational management and administration. My journey has been shaped by a unique blend of
                    religious studies and technical expertise.
                  </p>
                  <p>
                    With extensive experience in HR and technical fields, I've developed exceptional multitasking
                    abilities, leadership skills, and proficiency in hardware and software system maintenance. My
                    background has equipped me with strong ethical principles and communication skills that I apply in
                    every professional endeavor.
                  </p>
                  <p>
                    I specialize in cybersecurity and Linux system administration, while maintaining a strong focus on
                    human resources management. This unique combination allows me to bridge the gap between technology
                    and people, ensuring optimal organizational performance.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Contact Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                        <p className="text-slate-900 dark:text-white font-medium">+62 85119062492</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                        <p className="text-slate-900 dark:text-white font-medium">marlinhidayattanjung@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                        <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                        <p className="text-slate-900 dark:text-white font-medium">Indonesia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon && <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                </div>
                <motion.h3
                  className="text-3xl font-bold text-slate-900 dark:text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
                {stat.label === "Projects Completed" && (
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    {loading ? "Loading..." : "Synced with GitHub"}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
