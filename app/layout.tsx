import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vitiligo-website',
  description: 'Vitiligo-website',
  generator: 'me',
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
