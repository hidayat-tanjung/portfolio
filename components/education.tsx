"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      id: 1,
      institution: "Sekolah Tinggi Agama Islam Nias",
      degree: "Sarjana Sosial (S.Sos)",
      major: "Manajemen Dakwah",
      period: "2019 - 2023",
      grade: "Cumlaude",
      description:
        "Jurusan ini mempersiapkan mahasiswa untuk kegiatan dakwah sehingga akan memudahkan da'i dalam berdakwah sesuai dengan kerangka sehingga tujuan dakwah akan lebih mudah tercapai dengan permasalahan yang minimal pengawasan.",
      achievements: [
        "Graduated with Cumlaude honors",
        "Leadership in student organization",
        "Research on organizational management",
        "Community service projects",
      ],
      skills: ["Organizational Management", "Leadership", "Communication", "Project Management"],
    },
    {
      id: 2,
      institution: "MAS NU Gunungsitoli",
      degree: "Madrasah Aliyah",
      major: "Jurusan Agama",
      period: "2013 - 2016",
      grade: "Excellent",
      description:
        "Jurusan ini mempersiapkan siswa dalam memahami akidah dan akhlak yang bergenerasi islami, memberikan pemikiran dan pemahaman dalam etika beragama serta menjadikan insan yang baik.",
      achievements: [
        "Top 10% of graduating class",
        "Active in religious activities",
        "Student council member",
        "Academic excellence awards",
      ],
      skills: ["Religious Studies", "Ethics", "Character Building", "Public Speaking"],
    },
  ]

  const certifications = [
    {
      name: "Linux System Administration",
      issuer: "Professional Certification",
      year: "2023",
      icon: <Award className="h-5 w-5" />,
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "Security Institute",
      year: "2024",
      icon: <Award className="h-5 w-5" />,
    },
    {
      name: "HR Management Professional",
      issuer: "HR Institute",
      year: "2022",
      icon: <Award className="h-5 w-5" />,
    },
  ]

  return (
    <section id="education" ref={ref} className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Education & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My academic journey and professional development through continuous learning
          </p>
        </motion.div>

        {/* Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="ml-4">
                        <Badge variant="secondary" className="mb-2">
                          {edu.grade}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{edu.institution}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{edu.degree}</p>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{edu.major}</p>

                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed text-sm">{edu.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Key Achievements:
                    </h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
                Professional Certifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center p-6 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      {cert.icon}
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{cert.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{cert.issuer}</p>
                    <Badge variant="outline" className="text-xs">
                      {cert.year}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
