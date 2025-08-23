import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProviders } from '@/components/ui/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const geist = Geist({
	subsets: ['latin'],
	variable: '--font-geist',
})

const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
})

export const metadata: Metadata = {
	title: 'Emil Bobić - Frontend Developer & QA Engineer',
	description: 'Personal portfolio of Emil Bobić, a Frontend Developer and QA Engineer specializing in modern web technologies.',
	keywords: 'Emil Bobić, Frontend Developer, QA Engineer, React, TypeScript, Next.js, Accessibility, WCAG',
	authors: [{ name: 'Emil Bobić' }],
	robots: 'index, follow',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Preload critical images */}
				<link 
					rel="preload" 
					as="image" 
					href="/emilfull-removebg-preview.png"
					type="image/png"
				/>
				{/* DNS prefetch for external domains */}
				<link rel="dns-prefetch" href="//fonts.googleapis.com" />
				{/* Preconnect to external domains */}
				<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
			</head>
			<body className="antialiased">
				<ThemeProviders>
					{/* Skip to main content link for screen readers */}
					<a 
						href="#main-content" 
						className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						Skip to main content
					</a>
					
					<Navbar />
					<main id="main-content" role="main">
						{children}
					</main>
					<Footer />
				</ThemeProviders>
			</body>
		</html>
	)
}
