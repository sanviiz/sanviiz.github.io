import { NextPage } from 'next'
import Head from 'next/head'

const Custom404: NextPage = () => {
	return (
		<>
			<Head>
				<title>404 Page not found - All about Sanviiz</title>
				<link rel="icon" href="/favicon.svg" />
				<meta property="og:title" content="404 Page not found - All about Sanviiz" />
			</Head>
			<div className="container mx-auto max-w-5xl py-40 px-2 text-center xs:px-8 xl:px-0">
				<div>
					<h1 className="text-5xl text-gray-900 transition-all dark:text-white xs:text-7xl md:text-8xl">
						404
					</h1>
					<h2 className="mb-6 text-2xl text-gray-900 transition-all dark:text-white xs:text-3xl md:text-5xl lg:text-6xl">
						Page not found
					</h2>
					<p className="mb-6 text-base text-gray-600 transition-all dark:text-gray-400 md:text-lg lg:text-xl">
						Oops! Looks like you followed a bad link. <br className="hidden md:block" />
						If you think this is a problem with me, please tell me.
					</p>
					<a
						onClick={() => (window.location.href = '/')}
						className="inline-flex cursor-pointer items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-black dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Go back home
					</a>
				</div>
			</div>
		</>
	)
}

export default Custom404
