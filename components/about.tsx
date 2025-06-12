"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { User, Mail, Phone, MapPin, Award, Target } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { label: "Years Experience", value: "8+", icon: Award },
    { label: "Projects Completed", value: "50+", icon: Target },
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                    I specialize in cybersecurity, bug hunting, and Linux system administration, while maintaining a
                    strong focus on human resources management. This unique combination allows me to bridge the gap
                    between technology and people, ensuring optimal organizational performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Full Name</p>
                      <p className="text-slate-900 dark:text-white font-medium">Marlin Hidayat Tanjung, S.Sos</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                      <p className="text-slate-900 dark:text-white font-medium">+62 85119062492</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                      <p className="text-slate-900 dark:text-white font-medium">marlinhidayattanjung@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                      <p className="text-slate-900 dark:text-white font-medium">Indonesia</p>
                    </div>
                  </li>
                </ul>
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
                  <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</h3>
                <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
