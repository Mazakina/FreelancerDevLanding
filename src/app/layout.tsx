import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Mazakina.com',
  description: 'Frontend Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        style={{ background: '#E3E3E3' }}
        className={' text-c-gray700 min-h-screen'}
      >
        {children}
      </body>
      <Script src="https://smtpjs.com/v3/smtp.js" />
    </html>
  )
}
