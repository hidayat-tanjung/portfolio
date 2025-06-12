"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      id: 1,
      title: "Teknisi",
      company: "SSI",
      location: "Indonesia",
      period: "2023 - 2025",
      type: "Full-time",
      description: [
        "Bertanggung jawab terhadap mesin EDC dan maintenance sistem pembayaran",
        "Melakukan suplai kertas thermal dan kunjungan bulanan ke agen dan merchant",
        "Menangani troubleshooting perangkat di lokasi dengan response time optimal",
        "Memastikan uptime sistem pembayaran mencapai 99.5%",
      ],
      skills: ["Hardware Maintenance", "Troubleshooting", "Customer Service", "System Monitoring"],
    },
    {
      id: 2,
      title: "Freelancer - IT Support",
      company: "Bit",
      location: "Indonesia",
      period: "2024 - 2025",
      type: "Contract",
      description: [
        "Maintenance dan perbaikan CCTV di Bank BRI dengan standar keamanan tinggi",
        "Pembersihan perangkat setiap 3 bulan untuk menjaga performa optimal",
        "Perbaikan perangkat PC Mini dan CCTV dengan tingkat keberhasilan 95%",
        "Dokumentasi lengkap setiap maintenance untuk audit trail",
      ],
      skills: ["CCTV Systems", "Network Security", "Hardware Repair", "Documentation"],
    },
    {
      id: 3,
      title: "Junior Human Resources Associate",
      company: "Pusat Bekam Ruqyah",
      location: "Indonesia",
      period: "2015 - 2017",
      type: "Full-time",
      description: [
        "Bertanggung jawab membantu HRD dalam pengelolaan dokumen dan data karyawan",
        "Menangani administrasi kepegawaian dan proses rekrutmen",
        "Koordinasi dengan berbagai departemen untuk kebutuhan HR",
        "Implementasi sistem filing digital untuk efisiensi dokumentasi",
      ],
      skills: ["HR Administration", "Document Management", "Recruitment", "Data Entry"],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey spanning HR, IT support, and technical maintenance
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 flex items-center justify-center z-10">
                  <Briefcase className="h-3 w-3 text-white" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {exp.type}
                        </Badge>
                        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-2">
                        <span>{exp.company}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
