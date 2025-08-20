'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Repo { id: number; name: string; html_url: string; description: string | null }

export function Repos({ username = 'emilbobic', limit = 6 }: { username?: string; limit?: number }) {
	const [repos, setRepos] = useState<Repo[] | null>(null)

	useEffect(() => {
		let active = true
		;(async () => {
			try {
				const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`)
				const data: Repo[] = await res.json()
				if (active) setRepos(data)
			} catch {
				if (active) setRepos([])
			}
		})()
		return () => { active = false }
	}, [username, limit])

	return (
		 		<section id="projects" className="py-12 md:py-16">
			<div className="mx-auto max-w-5xl px-4 md:px-8">
				<h2 className="mb-6 text-center text-xl md:text-2xl font-semibold">Projects</h2>
				<div className="grid gap-4 sm:grid-cols-2">
					{(repos ?? Array.from({ length: limit })).map((repo, i) => (
						<motion.a
							key={(repo as Repo)?.id ?? i}
							href={(repo as Repo)?.html_url ?? '#'}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.05 }}
							className="rounded-lg border border-neutral-200 p-4 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
						>
							<p className="font-medium">{(repo as Repo)?.name ?? 'Loading…'}</p>
							<p className="line-clamp-2 text-sm text-black dark:text-neutral-400">{(repo as Repo)?.description ?? 'Fetching repository details…'}</p>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	)
}
