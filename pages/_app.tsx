import React, { useEffect } from 'react'
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@layout/Layout'
import { ContextWrapper, defaultState, SharedState } from '@hooks/context'
import { Theme } from '@helper/types'

function MyApp({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = React.useState<Theme>(defaultState.theme)
	const sharedState: SharedState = { theme, setTheme }

	useEffect(() => {
		const root = window.document.documentElement
		const initialColorValue = root.style.getPropertyValue('--initial-color-mode')
		initialColorValue === 'dark' && setTheme('dark')
	}, [])

	useEffect(() => {
		if (theme !== undefined) {
			if (theme === 'dark') {
				document.documentElement.className = 'dark'
				window.localStorage.setItem('theme', 'dark')
			} else {
				document.documentElement.className = 'light'
				window.localStorage.setItem('theme', 'light')
			}
		}
	}, [theme])

	return (
		<ContextWrapper value={sharedState}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ContextWrapper>
	)
}

export default MyApp
