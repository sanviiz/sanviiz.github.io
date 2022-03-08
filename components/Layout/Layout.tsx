import React, { FC } from 'react'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import PageRevealer from '@components/PageRevealer/PageRevealer'

const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			<div className="bg-white transition-all dark:bg-gray-900">{children}</div>
			<PageRevealer />
			<Footer />
		</>
	)
}

export default Layout
