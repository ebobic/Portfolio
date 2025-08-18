import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProviders } from '@/components/ui/theme-provider'

export const metadata: Metadata = {
	title: 'Emil Bobic – Portfolio',
	description: 'Junior frontend developer portfolio',
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProviders>{children}</ThemeProviders>
			</body>
		</html>
	)
}
