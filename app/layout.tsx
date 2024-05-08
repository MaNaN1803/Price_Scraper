import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Providers } from '@/components/Providers'
const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700']
 })

export const metadata: Metadata = {
  title: 'PriceScraper',
  description: 'Track product prices effortlessly and save money on your online shopping.',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
        </main>
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  )
}
