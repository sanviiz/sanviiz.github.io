import React, { FC } from 'react'
import Header from '@layout/Header'
import Footer from '@layout/Footer'
import PageRevealer from '@components/PageRevealer/PageRevealer'

const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			<PageRevealer />
			<div className="bg-white pt-12 transition-all dark:bg-gray-900">{children}</div>
			<Footer />
		</>
	)
}

export default Layout
