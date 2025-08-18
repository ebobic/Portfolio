export function About() {
	return (
		<section id="about" className="py-12 md:py-16">
			<div className="mx-auto max-w-5xl px-4 md:px-8">
				<h2 className="mb-8 text-center text-xl md:text-2xl font-semibold">About Me</h2>
				<div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
					{/* Photo */}
					<div className="flex-shrink-0">
						<img 
							src="/emil-profile.png" 
							alt="Emil Bobić" 
							className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg"
						/>
					</div>
					{/* Text */}
					<div className="flex-1 space-y-4 text-base md:text-lg lg:text-xl text-neutral-700 dark:text-neutral-300">
						<p>
						I'm Emil Bobic, a junior frontend developer focused on building accessible, user-friendly interfaces. 
						</p>
						<p> 
						I'm currently sharpening my skills in React, TypeScript, Next.js, and WCAG standards.

I care about clean design, performance, and developer experience, and I love turning ideas into polished, inclusive web applications.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}


