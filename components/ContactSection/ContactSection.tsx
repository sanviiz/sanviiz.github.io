import React, { FC } from 'react'

const ContactSection: FC = () => {
	return (
		<>
			<span className="relative text-3xl font-normal text-gray-500 transition-all dark:text-gray-300">
				Get In Touch
				<div className="absolute -top-16" id="contact" />
			</span>
			<div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2">
				<a
					href="https://www.facebook.com/sanviiz/"
					target="_blank"
					rel="noreferrer"
					className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-gray-50 py-2.5 px-4 transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-700"
				>
					<span className="text-base font-medium text-gray-900 transition-all dark:text-white sm:text-lg">
						Facebook
					</span>
					<svg
						className="hidden h-5 w-5 text-gray-900 transition-all dark:text-white xs:block"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						></path>
					</svg>
				</a>
				<a
					href="https://www.linkedin.com/in/sanviiz/"
					target="_blank"
					rel="noreferrer"
					className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-gray-50 py-2.5 px-4 transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-700"
				>
					<span className="text-base font-medium text-gray-900 transition-all dark:text-white sm:text-lg">
						LinkedIn
					</span>
					<svg
						className="hidden h-5 w-5 text-gray-900 transition-all dark:text-white xs:block"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
						></path>
					</svg>
				</a>
				<a
					href="tel:+66830544633"
					className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-gray-50 py-2.5 px-4 transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-700"
				>
					<span className="text-base font-medium text-gray-900 transition-all dark:text-white sm:text-lg">
						(+66)83 054 4633
					</span>
					<svg
						className="hidden h-5 w-5 text-gray-900 transition-all dark:text-white xs:block"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						/>
					</svg>
				</a>
				<a
					href="mailto:sanviiz06@hotmail.com"
					className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-gray-50 py-2.5 px-4 transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-700"
				>
					<span className="text-base font-medium text-gray-900 transition-all dark:text-white sm:text-lg">
						sanviiz06@hotmail.com
					</span>
					<svg
						className="hidden h-5 w-5 text-gray-900 transition-all dark:text-white xs:block"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</a>
			</div>
		</>
	)
}

export default ContactSection
