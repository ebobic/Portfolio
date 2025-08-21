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
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geist.variable} ${geistMono.variable} antialiased`}>
				<ThemeProviders>
					<Navbar />
					<main>
						{children}
					</main>
					<Footer />
				</ThemeProviders>
			</body>
		</html>
	)
}
