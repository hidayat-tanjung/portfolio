"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Monitor, Users, Database } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      id: 1,
      title: "Bank BRI CCTV Security System",
      description:
        "Comprehensive CCTV maintenance and security monitoring system for Bank BRI branches. Implemented automated monitoring, preventive maintenance scheduling, and real-time alert systems.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["CCTV Systems", "Network Security", "Monitoring", "Hardware Maintenance"],
      category: "Security",
      icon: <Shield className="w-full h-full" />,
      features: [
        "24/7 monitoring system",
        "Automated maintenance alerts",
        "Security compliance reporting",
        "Remote diagnostics capability",
      ],
    },
    {
      id: 2,
      title: "EDC Payment System Management",
      description:
        "Complete EDC machine management system for SSI, including maintenance scheduling, thermal paper supply chain, and merchant support system with 99.5% uptime achievement.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Hardware Management", "Supply Chain", "Customer Support", "System Monitoring"],
      category: "Technical",
      icon: <Monitor className="w-full h-full" />,
      features: [
        "Automated supply management",
        "Real-time system monitoring",
        "Merchant support portal",
        "Performance analytics dashboard",
      ],
    },
    {
      id: 3,
      title: "HR Document Management System",
      description:
        "Digital transformation of HR processes at Pusat Bekam Ruqyah, implementing paperless documentation, automated workflows, and employee self-service portal.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Document Management", "Workflow Automation", "Database Design", "User Interface"],
      category: "HR Technology",
      icon: <Users className="w-full h-full" />,
      features: [
        "Digital document storage",
        "Automated approval workflows",
        "Employee self-service",
        "Compliance tracking",
      ],
    },
    {
      id: 4,
      title: "Linux Server Infrastructure",
      description:
        "Design and implementation of secure Linux server infrastructure with automated backup systems, security monitoring, and performance optimization for multiple client environments.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Linux Administration", "Server Security", "Backup Systems", "Performance Monitoring"],
      category: "Infrastructure",
      icon: <Database className="w-full h-full" />,
      features: ["Automated backup solutions", "Security hardening", "Performance optimization", "24/7 monitoring"],
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Security: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
      Technical: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      "HR Technology": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      Infrastructure: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    }
    return colors[category as keyof typeof colors] || colors.Technical
  }

  return (
    <section id="projects" ref={ref} className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcase of my technical projects and professional implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-32 sm:h-40 md:h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                  {/* Background Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 opacity-10 text-slate-600 dark:text-slate-400">
                    {project.icon}
                  </div>

                  {/* Centered Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                  </div>

                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6 pb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new projects, technical challenges, and opportunities to contribute to
                innovative solutions.
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Let's Collaborate
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
