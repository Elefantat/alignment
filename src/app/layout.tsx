import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alignment - AI Built for Reflective Wellbeing',
  description: 'AI-supported inner-work platform that meets you where you\'re at. A stigma-free way to get clear on what\'s going inside.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}




