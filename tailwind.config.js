const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '350px',
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				jetbrains: 'JetBrainsMono',
			},
		},
	},
	plugins: [],
}
