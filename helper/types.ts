export type Theme = 'light' | 'dark'

export type RevealerStatus = {
	animation: Boolean
	complete: Boolean
	hide: Boolean
}

export type TableContents = {
	label: String
	link: String
}

export type Education = {
	academy: String
	program: String
	description: String
	list?: String[]
}

export type Work = {
	company: String
	role: String
	date: String
	place: String
	list: String[]
}
