"use server"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(formData: FormData) {
  try {
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        success: false,
        error: "All fields are required",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      }
    }

    // Use Formspree (free email service) - replace with your actual Formspree endpoint
    const formspreeEndpoint = "https://formspree.io/f/xdkogkvo" // You need to create this at formspree.io

    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        _replyto: data.email,
        _subject: `Portfolio Contact: ${data.subject}`,
        _template: "table",
      }),
    })

    if (!response.ok) {
      // Fallback: create mailto link for user
      const mailtoLink = `mailto:marlinhidayattanjung@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${data.subject}`)}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\nMessage:\n${data.message}`)}`

      return {
        success: false,
        error: "Email service temporarily unavailable. Please use the direct email link below.",
        mailtoLink: mailtoLink,
      }
    }

    return {
      success: true,
      message: "Your message has been sent successfully! I will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form error:", error)

    // Provide mailto fallback
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    const mailtoLink = `mailto:marlinhidayattanjung@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${data.subject}`)}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\nMessage:\n${data.message}`)}`

    return {
      success: false,
      error: "Failed to send message through contact form. Please use the direct email link below.",
      mailtoLink: mailtoLink,
    }
  }
}
