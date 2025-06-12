"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Bug, Server, Users, FileSpreadsheet, MonitorCheck, Network, Database, Lock } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Cybersecurity & Security",
      icon: <Shield className="h-8 w-8 text-red-600" />,
      color: "red",
      skills: [
        { name: "Cyber Security", level: 90 },
        { name: "Bug Hunter", level: 85 },
        { name: "Network Security", level: 80 },
        { name: "Security Auditing", level: 75 },
      ],
    },
    {
      title: "System Administration",
      icon: <Server className="h-8 w-8 text-green-600" />,
      color: "green",
      skills: [
        { name: "Linux Sysadmin", level: 95 },
        { name: "IT Technician", level: 90 },
        { name: "Hardware Maintenance", level: 85 },
        { name: "System Monitoring", level: 80 },
      ],
    },
    {
      title: "Human Resources",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      color: "blue",
      skills: [
        { name: "Leadership", level: 90 },
        { name: "HR Administration", level: 85 },
        { name: "Team Management", level: 80 },
        { name: "Recruitment", level: 75 },
      ],
    },
    {
      title: "Office & Administration",
      icon: <FileSpreadsheet className="h-8 w-8 text-purple-600" />,
      color: "purple",
      skills: [
        { name: "Software Administrasi Perkantoran", level: 85 },
        { name: "Document Management", level: 90 },
        { name: "Data Analysis", level: 75 },
        { name: "Process Optimization", level: 80 },
      ],
    },
  ]

  const technicalSkills = [
    { name: "Linux Administration", icon: <Server className="h-5 w-5" />, level: 95 },
    { name: "Network Security", icon: <Network className="h-5 w-5" />, level: 85 },
    { name: "CCTV Systems", icon: <MonitorCheck className="h-5 w-5" />, level: 90 },
    { name: "Database Management", icon: <Database className="h-5 w-5" />, level: 75 },
    { name: "Penetration Testing", icon: <Lock className="h-5 w-5" />, level: 80 },
    { name: "Bug Hunting", icon: <Bug className="h-5 w-5" />, level: 85 },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      red: "bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800",
      green: "bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800",
      blue: "bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800",
      purple: "bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`h-full hover:shadow-xl transition-all duration-300 border-2 ${getColorClasses(category.color)}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md">{category.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white ml-4">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.8 + skillIndex * 0.1 }}
                            className={`h-2 rounded-full ${
                              category.color === "red"
                                ? "bg-red-600"
                                : category.color === "green"
                                  ? "bg-green-600"
                                  : category.color === "blue"
                                    ? "bg-blue-600"
                                    : "bg-purple-600"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technical Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
                Technical Proficiency Overview
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">{skill.icon}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{skill.name}</span>
                          <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.2, delay: 1 + index * 0.1 }}
                            className="bg-blue-600 h-1.5 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
