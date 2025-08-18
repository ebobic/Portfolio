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
						I'm Emil Bobić, a junior frontend developer focused on building accessible, user-friendly interfaces. 
						</p>
						<p> 
						I'm currently sharpening my skills in React, TypeScript, Next.js, and WCAG standards.

I care about clean design, performance, and developer experience, and I love turning ideas into polished, inclusive web applications.
						</p>
						
						{/* Tech Stack */}
						<div className="pt-4">
							<h3 className="text-lg md:text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">Tech Stack</h3>
							<div className="flex flex-wrap gap-4">
								{/* TypeScript */}
								<div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-2 rounded-lg">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
										<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
									</svg>
									<span className="font-medium text-blue-700 dark:text-blue-300">TypeScript</span>
								</div>
								
								{/* HTML */}
								<div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 px-3 py-2 rounded-lg">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
										<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
									</svg>
									<span className="font-medium text-orange-700 dark:text-orange-300">HTML</span>
								</div>
								
								{/* CSS */}
								<div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-2 rounded-lg">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
										<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
									</svg>
									<span className="font-medium text-blue-700 dark:text-blue-300">CSS</span>
								</div>
								
								{/* React */}
								<div className="flex items-center gap-2 bg-cyan-50 dark:bg-cyan-900/20 px-3 py-2 rounded-lg">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
										<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-5.303 2.715a.334.334 0 0 0-.119.267.322.322 0 0 0 .116.248c.42.35 1.077.851 1.077.851s-.645.5-1.077.85a.326.326 0 0 0-.116.247c0 .104.044.197.119.267 2.196 1.755 3.957 2.715 5.303 2.715.28 0 .504-.225.504-.504 0-.28-.224-.504-.504-.504-.28 0-.504-.224-.504-.504 0-.28.224-.504.504-.504.28 0 .504-.224.504-.504 0-.28-.224-.504-.504-.504zm-9.756 0c-.28 0-.504.224-.504.504 0 .28.224.504.504.504.28 0 .504.224.504.504 0 .28-.224.504-.504.504-.28 0-.504.224-.504.504 0 .28.224.504.504.504 1.346 0 3.107-.96 5.303-2.715a.334.334 0 0 0 .119-.267.322.322 0 0 0-.116-.248c-.42-.35-1.077-.851-1.077-.851s.645-.5 1.077-.85a.326.326 0 0 0 .116-.247c0-.104-.044-.197-.119-.267-2.196-1.755-3.957-2.715-5.303-2.715zm-5.303 2.715c-2.196 1.755-3.957 2.715-5.303 2.715-.28 0-.504.225-.504.504 0 .28.224.504.504.504 1.346 0 3.107-.96 5.303-2.715a.334.334 0 0 0 .119-.267.322.322 0 0 0-.116-.248c-.42-.35-1.077-.851-1.077-.851s.645-.5 1.077-.85a.326.326 0 0 0 .116-.247c0-.104-.044-.197-.119-.267zm0 5.303c-2.196-1.755-3.957-2.715-5.303-2.715-.28 0-.504-.224-.504-.504 0-.28.224-.504.504-.504 1.346 0 3.107.96 5.303 2.715a.334.334 0 0 0 .119.267.322.322 0 0 0-.116.248c-.42.35-1.077.851-1.077.851s.645.5 1.077.85a.326.326 0 0 0 .116.247c0 .104-.044.197-.119.267zm5.303 2.715c2.196-1.755 3.957-2.715 5.303-2.715.28 0 .504-.224.504-.504 0-.28-.224-.504-.504-.504-1.346 0-3.107.96-5.303 2.715a.334.334 0 0 0-.119.267.322.322 0 0 0 .116.248c.42.35 1.077.851 1.077.851s-.645.5-1.077.85a.326.326 0 0 0-.116.247c0 .104.044.197.119.267z"/>
									</svg>
									<span className="font-medium text-cyan-700 dark:text-cyan-300">React</span>
								</div>
								
								{/* Next.js */}
								<div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
										<path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.394.043 1.614.043 2.008 0 1.611-.176 3.028-.593 4.323-1.264.207-.109.247-.134.219-.142-.024-.006-.551-.352-1.169-.769l-1.124-.758-.147-.096a.307.307 0 0 0-.286 0c-.096.06-.147.096-.147.096l-1.124.758c-.618.417-1.145.763-1.169.769-.028.008.012.033.219.142 1.295.671 2.712 1.088 4.323 1.264.394.043 1.614.043 2.008 0 .934-.103 1.755-.275 2.534-.525 4.349-1.403 7.557-5.189 8.209-9.695.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.747c-.652-4.506-3.86-8.292-8.209-9.695a12.253 12.253 0 0 0-2.534-.525C11.87.001 11.736 0 11.572 0zM9.427 5.569c.934 0 1.755.172 2.534.422 2.324.748 4.04 2.551 4.604 4.96.096.403.108.598.108 1.049s-.012.646-.108 1.049c-.564 2.409-2.28 4.212-4.604 4.96-.779.25-1.6.422-2.534.422s-1.755-.172-2.534-.422c-2.324-.748-4.04-2.551-4.604-4.96-.096-.403-.108-.598-.108-1.049s.012-.646.108-1.049c.564-2.409 2.28-4.212 4.604-4.96.779-.25 1.6-.422 2.534-.422z"/>
									</svg>
									<span className="font-medium text-gray-700 dark:text-gray-300">Next.js</span>
								</div>
							</div>
						</div>
						
						{/* QA Skills */}
						<div className="pt-4">
							<h3 className="text-lg md:text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">QA Skills</h3>
							<div className="flex flex-wrap gap-4">
								{/* Manual Testing */}
								<div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-2 rounded-lg">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
										<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
									</svg>
									<span className="font-medium text-green-700 dark:text-green-300">Manual Testing</span>
								</div>
								
								{/* Mobile App Testing */}
								<div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-3 py-2 rounded-lg">
									<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
										<path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
									</svg>
									<span className="font-medium text-purple-700 dark:text-purple-300">Mobile App Testing</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}


