export type Theme = 'light' | 'dark'

export type RevealerStatus = {
	animation: boolean
	complete: boolean
	hide: boolean
}

export type TableContents = {
	label: string
	link: string
}

export type Education = {
	academy: string
	program: string
	description: string
	list?: string[]
}

export type Work = {
	company: string
	role: string
	date: string
	place: string
	list: string[]
	link?: string
}

export type Project = {
	title: string
	keywords: string[]
	date: string
	place: string
	list: string[]
	link?: string
}
