import React, { FC } from 'react'
import Switch from 'react-switch'
import { IoMoon } from 'react-icons/io5'
import { MdWbSunny } from 'react-icons/md'
import { useAppContext } from '@hooks/context'

const Header: FC = () => {
	const context = useAppContext()
	const handleChange = () => {
		context.theme === 'dark' ? context.setTheme('light') : context.setTheme('dark')
	}

	return (
		<>
			<nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white px-2 py-2.5 transition-all dark:border-gray-600 dark:bg-gray-800 xs:px-8">
				<div className="container mx-auto flex max-w-5xl flex-wrap items-center justify-between">
					<div className="flex items-center">
						<span
							className="cursor-pointer self-center whitespace-nowrap text-xl font-semibold transition-all dark:text-white"
							onClick={() =>
								window.scrollTo({
									top: 0,
									behavior: 'smooth',
								})
							}
						>
							Sanviiz
						</span>
					</div>
					<div className="flex items-center">
						<div className="flex items-center md:hidden">
							<Switch
								onColor="#475569"
								offColor="#374151"
								uncheckedIcon={
									<MdWbSunny className="ml-1.5 h-full w-[18px] text-white" />
								}
								checkedIcon={<IoMoon className="ml-2 h-full w-4 text-white" />}
								activeBoxShadow="none"
								onChange={() => handleChange()}
								checked={context.theme === 'dark'}
							/>
						</div>
						<button
							data-collapse-toggle="mobile-menu"
							type="button"
							className="ml-3 inline-flex items-center rounded-lg border border-gray-200 p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
							aria-controls="mobile-menu-2"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="h-6 w-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								></path>
							</svg>
							<svg
								className="hidden h-6 w-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</div>
					<div className="hidden w-full md:block md:w-auto" id="mobile-menu">
						<ul className="flex flex-col md:mt-0 md:flex-row md:items-center md:space-x-8 md:text-sm md:font-medium">
							<li className="hidden items-center md:flex">
								<Switch
									onColor="#475569"
									offColor="#374151"
									uncheckedIcon={
										<MdWbSunny className="ml-1.5 h-full w-[18px] text-white" />
									}
									checkedIcon={<IoMoon className="ml-2 h-full w-4 text-white" />}
									activeBoxShadow="none"
									onChange={() => handleChange()}
									checked={context.theme === 'dark'}
								/>
							</li>
							<li>
								<div
									className="block cursor-pointer border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-gray-900 md:dark:hover:bg-transparent md:dark:hover:text-white"
									onClick={() =>
										window.open(
											'https://github.com/sanviiz/sanviiz.github.io/tree/develop/'
										)
									}
								>
									Source
								</div>
							</li>
							<li>
								<div
									className="block cursor-pointer border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-gray-900 md:dark:hover:bg-transparent md:dark:hover:text-white"
									onClick={() =>
										document.querySelector('#contact').scrollIntoView({
											behavior: 'smooth',
										})
									}
								>
									Contact
								</div>
							</li>
							<li>
								<div
									data-tooltip-target="tooltip-default"
									data-tooltip-placement="bottom"
									className="block cursor-pointer py-2 pr-4 pl-3 text-gray-700 transition-all hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-gray-900 md:dark:hover:bg-transparent md:dark:hover:text-white"
								>
									Blog
								</div>
								<div
									id="tooltip-default"
									role="tooltip"
									className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 py-2 px-3 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
								>
									Coming soon...
									<div className="tooltip-arrow" data-popper-arrow></div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Header
