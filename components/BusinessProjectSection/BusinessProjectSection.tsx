import { Project } from '@helper/types'
import React, { FC, ReactNode } from 'react'

const BusinessProjectSection: FC = () => {
	const businessProjectList: Project[] = [
		{
			title: 'KWI Asia website',
			keywords: ['Frontend', 'Team'],
			date: 'December 2021',
			place: 'Bangkok, Thailand',
			list: [
				'Connected website interface with API endpoint by using Javascript on Laravel framework',
				'Build components on control panel section such as Re-order Table, Image Gallery etc. with React.js, Ant Design and Tailwind.css',
				'Daily scrum meeting and Updating project progress on notion (Agile)',
			],
			link: 'https://www.kwiasia.com/',
		},
		{
			title: 'Exam system control panel',
			keywords: ['Frontend'],
			date: 'October 2021',
			place: 'Bangkok, Thailand',
			list: [
				'Designed UX/UI Control Panel System (CMS) for user to manage examination',
				'Using JSON Web Token (JWT) for authorization',
				'Implemeted React.js and Tailwind.css to built web application',
			],
		},
		{
			title: 'TJS E-Commerce website',
			keywords: ['Frontend'],
			date: 'August 2021',
			place: 'Bangkok, Thailand',
			list: [
				'Built an e-commerce web application for Personal and Organization',
				'Implemeted Next.js and Tailwind.css to built web application',
			],
		},
		{
			title: 'Jaadhai insurance website',
			keywords: ['Frontend'],
			date: 'March 2021',
			place: 'Bangkok, Thailand',
			list: [
				'Designed UX/UI Control Panel System (CMS) for user to manage permission and insurance order',
				'Built frontend web application and CMS on Laravel framework with html, css and JQuery',
			],
			link: 'https://www.jaadhai.com/',
		},
		{
			title: 'Redesigned vistec website',
			keywords: ['Frontend', 'Team'],
			date: 'September 2020',
			place: 'Bangkok, Thailand',
			list: [
				'Composing and Migrating new design into production website for Vidyasirimedhi Institute of Science and Technology (VISTEC)',
				'Implemented Bootstrap 4, SCSS and JQuery to redesign old Web Application',
				'Weekly scrum meeting and Updating project progress on trello.com',
			],
		},
		{
			title: 'Iot training workshop',
			keywords: ['Co-Lecturer'],
			date: 'June 2020',
			place: 'Bangkok, Thailand',
			list: [
				'Preparing and Testing IoT Training Board with ESP32, LED, RFID, Temperature Sensor and Humidity Sensor',
			],
			link: 'https://www.facebook.com/103416527738643/posts/285461332867494/',
		},
	]

	const [collapse, setCollapse] = React.useState<boolean>(false)

	React.useEffect(() => {
		businessProjectList.length > 3 ? setCollapse(true) : setCollapse(false)
	}, [])

	const renderProject = (projectlist: Project[]): ReactNode =>
		projectlist.map((project, index) => (
			<div
				key={index}
				className={`mt-4 rounded-lg border border-gray-200 p-4 transition-all dark:border-gray-700`}
			>
				<h3 className="mb-1 flex items-center text-lg font-semibold uppercase text-gray-900 transition-all dark:text-white">
					{project.title}{' '}
					{project?.link && (
						<svg
							className="ml-2 inline-block h-6 w-6 cursor-pointer self-start"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							onClick={() => window.open(project.link)}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							></path>
						</svg>
					)}
				</h3>
				<span className="mb-2 block text-sm font-normal leading-normal text-gray-400 transition-all dark:text-gray-500">
					Keywords: {project.keywords.join(', ')}
				</span>
				<p className="text-base font-normal text-gray-500 transition-all dark:text-gray-400">
					{project.date}
					<span className="hidden sm:inline"> | </span>
					<br className="block sm:hidden" />
					{project.place}
				</p>
				{project?.list && (
					<ul className="ml-4 list-disc text-base font-normal text-gray-500 transition-all dark:text-gray-400">
						{project.list.map((listElement, index) => {
							return <li key={index}>{listElement}</li>
						})}
					</ul>
				)}
			</div>
		))

	return (
		<>
			<span className="text-3xl font-normal text-gray-500 transition-all dark:text-gray-300">
				Business Projects
			</span>
			<div className="pb-6">
				{renderProject(businessProjectList.slice(0, 3))}
				{!collapse && renderProject(businessProjectList.slice(3))}
				{businessProjectList.length > 3 && (
					<div className="mt-4 text-center sm:text-left">
						<button
							className="inline-flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-black dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							onClick={() => setCollapse(!collapse)}
						>
							{collapse ? 'Show More' : 'Hide'}
						</button>
					</div>
				)}
			</div>
		</>
	)
}

export default BusinessProjectSection
