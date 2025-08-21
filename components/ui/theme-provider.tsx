'use client'

import { ThemeProvider } from 'next-themes'
import * as React from 'react'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
			{children}
		</ThemeProvider>
	)
}
