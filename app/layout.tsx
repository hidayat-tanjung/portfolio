import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marlin Hidayat Tanjung - Portfolio",
  description:
    "HR Professional & IT Technician specializing in cybersecurity, system administration, and organizational management",
  keywords: [
    "HR Professional",
    "IT Technician",
    "Cybersecurity",
    "Linux Sysadmin",
    "System Administration",
  ],
  authors: [{ name: "Marlin Hidayat Tanjung" }],
  creator: "Marlin Hidayat Tanjung",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marlintanjung.com",
    title: "Marlin Hidayat Tanjung - Portfolio",
    description:
      "HR Professional & IT Technician specializing in cybersecurity, system administration, and organizational management",
    siteName: "Marlin Tanjung Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marlin Hidayat Tanjung - Portfolio",
    description:
      "HR Professional & IT Technician specializing in cybersecurity, system administration, and organizational management",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
