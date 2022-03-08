import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="stylesheet"
					href="https://unpkg.com/flowbite@1.3.4/dist/flowbite.min.css"
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: blockingSetInitialColorMode,
					}}
				></script>
			</Head>
			<body className="h-screen bg-white font-jetbrains subpixel-antialiased transition-all dark:bg-gray-800">
				<Main />
				<NextScript />
				<script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
			</body>
		</Html>
	)
}

const blockingSetInitialColorMode = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`

function setInitialColorMode() {
	function getInitialColorMode() {
		const persistedColorPreference = window.localStorage.getItem('theme')
		const hasPersistedPreference = typeof persistedColorPreference === 'string'
		if (hasPersistedPreference) {
			return persistedColorPreference
		}
		const mql = window.matchMedia('(prefers-color-scheme: dark)')
		const hasMediaQueryPreference = typeof mql.matches === 'boolean'
		if (hasMediaQueryPreference) {
			return mql.matches ? 'dark' : 'light'
		}
		return 'light'
	}
	const colorMode = getInitialColorMode()
	const root = document.documentElement
	root.style.setProperty('--initial-color-mode', colorMode)
	if (colorMode === 'dark') document.documentElement.className = 'dark'
}
