// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import Navbar from '../components/Navbar'
import './globals.css'
import { Toaster } from 'sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: "GroceryQ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className='bg-neutral-950'>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {/* Navbar will be here */}
          <Navbar />
          {/* Page content */}
          <main>
            {children}
            <Toaster richColors position="top-center" />
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
