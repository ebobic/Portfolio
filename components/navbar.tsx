'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function Navbar({ 
	activeSection, 
	setActiveSection 
}: { 
	activeSection: string
	setActiveSection: (section: string) => void 
}) {
	const { theme, setTheme } = useTheme()
	const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-black/60">
			<div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
			<button onClick={() => setActiveSection('hero')} className="font-semibold tracking-tight">Emil Bobic</button>
				<div className="flex items-center gap-6">
				<button onClick={() => setActiveSection('projects')} className="text-sm hover:opacity-80">Projects</button>
<button onClick={() => setActiveSection('about')} className="text-sm hover:opacity-80">About</button>
<button onClick={() => setActiveSection('contact')} className="text-sm hover:opacity-80">Contact</button>
					<button onClick={toggle} aria-label="Toggle theme" className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
						<Sun className="h-4 w-4 dark:hidden" />
						<Moon className="hidden h-4 w-4 dark:block" />
					</button>
				</div>
			</div>
		</nav>
	)
}
