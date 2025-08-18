import { Github, Linkedin, Mail } from 'lucide-react'

export function Contact({
	email = 'emil.bobic@gmail.com',
	githubUrl = 'https://github.com/ebobic',
	linkedinUrl = 'https://www.linkedin.com/in/emil-bobi%C4%87-35a00a2a1/',
}: {
	email?: string
	githubUrl?: string
	linkedinUrl?: string
}) {
	return (
		<section id="contact" className="py-16">
			<div className="mx-auto max-w-5xl px-4">
				<h2 className="mb-4 text-center text-2xl font-semibold">Contact</h2>
				<p className="mx-auto mb-6 max-w-2xl text-center text-neutral-700 dark:text-neutral-300">
					I'd love to connect. Feel free to reach out or follow my work.
				</p>
				<div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
					<a
						href={`mailto:${email}`}
						className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
					>
						<Mail className="h-4 w-4" />
						Email me
					</a>
					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2 dark:border-neutral-700"
					>
						<Github className="h-4 w-4" />
						GitHub
					</a>
					<a
						href={linkedinUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-4 py-2 dark:border-neutral-700"
					>
						<Linkedin className="h-4 w-4" />
						LinkedIn
					</a>
				</div>
			</div>
		</section>
	)
}


