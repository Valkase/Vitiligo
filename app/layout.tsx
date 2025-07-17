import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chromacure',
  description: 'Chromacure Official Website',
  generator: 'Chromacure development team',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
