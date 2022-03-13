import { NextPage } from 'next'

const Custom404: NextPage = () => {
	return (
		<>
			<div className="container mx-auto max-w-5xl py-40 px-2 text-center xs:px-8 xl:px-0">
				<div>
					<h1 className="text-5xl text-gray-900 transition-all dark:text-white xs:text-7xl md:text-8xl">
						404
					</h1>
					<h2 className="mb-6 text-2xl text-gray-900 transition-all dark:text-white xs:text-3xl md:text-5xl lg:text-6xl">
						Page not found
					</h2>
					<p className="text-base text-gray-600 transition-all dark:text-gray-400 md:text-lg lg:text-xl">
						Oops! Looks like you followed a bad link. <br className="hidden md:block" />
						If you think this is a problem with me, please tell me.
					</p>
				</div>
			</div>
		</>
	)
}

export default Custom404
