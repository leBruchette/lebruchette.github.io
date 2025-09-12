import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {content} from '@/data/content'
import './globals.css'
import {ThemeProvider} from "@/components/ThemeProvider";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: `${content.personal.name} - ${content.personal.title}`,
    description: `${content.personal.bio}`,
}

export default function RootLayout({children,}: {    children: React.ReactNode}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}