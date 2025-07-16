"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { sendContactEmail } from "@/app/actions/contact"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: result.message,
        })

        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) {
          form.reset()
        }
      } else {
        toast({
          title: "Failed to send message",
          description: result.error,
          variant: "destructive",
        })

        // If there's a mailto fallback, open it
        if (result.mailtoLink) {
          setTimeout(() => {
            window.open(result.mailtoLink, "_blank")
          }, 2000)
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again or contact me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+62 85119062492",
      description: "Available Mon-Fri, 9AM-6PM",
      color: "green",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "marlinhidayattanjung@gmail.com",
      description: "I'll respond within 24 hours",
      color: "blue",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Gunungsitoli, Sumatera Utara, Indonesia",
      description: "Remote work available",
      color: "purple",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3 text-blue-600" />
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className={`p-3 rounded-full ${getColorClasses(info.color)}`}>{info.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-slate-900 dark:text-white">{info.label}</h4>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">{info.value}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{info.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 mr-3" />
                    <h3 className="text-lg font-semibold">Quick Response</h3>
                  </div>
                  <p className="text-blue-100 mb-4">
                    I typically respond to messages within 24 hours. For urgent matters, feel free to call directly.
                  </p>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="text-sm">Available for remote collaboration</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Send Me a Message</h3>

                <form id="contact-form" action={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="h-12"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="h-12"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Discussion / Job Opportunity / Consultation"
                      required
                      className="h-12"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, requirements, or how I can help you..."
                      rows={6}
                      required
                      className="resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 h-12 flex-1">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-12 flex-1"
                      onClick={() =>
                        window.open(
                          "mailto:marlinhidayattanjung@gmail.com?subject=Portfolio%20Contact&body=Hi%20Marlin,%0D%0A%0D%0AI%20would%20like%20to%20discuss...",
                          "_blank",
                        )
                      }
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Direct Email
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:items-center">
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      24h response
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Secure
                    </Badge>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div className="text-sm text-blue-800 dark:text-blue-200">
                        <p className="font-medium mb-1">Your message will be sent directly to:</p>
                        <p className="text-blue-600 dark:text-blue-300">marlinhidayattanjung@gmail.com</p>
                        <p className="mt-2 text-xs text-blue-700 dark:text-blue-300">
                          I'll respond personally within 24 hours. For urgent matters, feel free to call directly.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
