import React, { FC } from 'react'
import Typewriter from 'typewriter-effect'

const HeroSection: FC = () => {
	return (
		<>
			<div className="flex flex-col justify-between md:flex-row">
				<div className="flex flex-col justify-between gap-4 md:gap-0">
					<div>
						<span className="mb-2 block text-3xl font-medium transition-all dark:text-gray-200 sm:text-4xl lg:mb-0">
							Hi there, I&apos;m
						</span>
						<span className="block bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-4xl font-medium leading-none text-transparent transition-all dark:from-green-400 dark:to-blue-500 sm:text-5xl lg:leading-normal">
							Pakkaphong Akkabut
						</span>
						<div className="my-4 h-1.5 w-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all dark:from-green-400 dark:to-blue-500 lg:mt-0" />
						<div className="text-xl font-medium text-gray-800 transition-all dark:text-gray-300 xs:text-2xl sm:text-3xl">
							<Typewriter
								options={{
									strings: ['Web Developer', 'UX/UI Designer', 'IoT Developer'],
									autoStart: true,
									loop: true,
								}}
							/>
						</div>
					</div>
					<a
						href="/files/sanviiz_resume.pdf"
						target="_blank"
						rel="noreferrer"
						className="max-w-fit cursor-pointer text-lg font-medium transition-all dark:text-white xs:text-xl"
					>
						{'<Download Resume />'}
					</a>
				</div>
				<div className="relative my-4 hidden aspect-square w-full max-w-fit self-center sm:w-72 md:my-0 md:block">
					<div className="absolute -right-2 top-2 h-full w-full pb-2 pr-2 sm:p-4">
						<div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all dark:from-green-400 dark:to-blue-500" />
					</div>
					<div className="aspect-square h-full w-full pb-2 sm:h-72 sm:p-4">
						<img
							src="/images/profile_image.webp"
							alt="Pakkaphong Akkabut"
							title="Pakkaphong Akkabut"
							draggable="false"
							className="relative h-full"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default HeroSection
