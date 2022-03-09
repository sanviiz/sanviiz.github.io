import React, { FC } from 'react'
import { Work } from '@helper/types'

const WorkSection: FC = () => {
	const workList: Work[] = [
		{
			company: 'Tech basecamp co., ltd.',
			role: 'Frontend Developer',
			date: 'December 2020 - Now',
			place: 'Bangkok, TH',
			list: [
				'UX/UI Design for Responsive Web Application (Mobile/Desktop)',
				'Develop CMS System on Web Application by using Laravel and Next.js (React.js)',
			],
		},
		{
			company: 'Tentrack laboratory',
			role: 'IoT Developer',
			date: 'Project by Project',
			place: 'Bangkok, TH',
			list: [
				'Software Develop for IoT Project',
				'Hardware Embedded and Design',
				'IoT Project Consultant',
			],
		},
	]

	return (
		<>
			<span className="text-3xl font-normal text-gray-500 transition-all dark:text-gray-300">
				Work experience
			</span>
			<div className="pt-4 pl-4">
				<ol className="relative border-l border-gray-200 transition-all dark:border-gray-700">
					{workList.map((work, index) => (
						<li
							className={`ml-6 ${index === workList.length - 1 ? 'mb-6' : 'mb-10'}`}
							key={index}
						>
							<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white transition-all dark:bg-blue-900 dark:ring-gray-900">
								<svg
									className="h-3 w-3 text-blue-600 transition-all dark:text-blue-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clipRule="evenodd"
									></path>
								</svg>
							</span>
							<h3 className="mb-1 flex items-center text-lg font-semibold uppercase text-gray-900 transition-all dark:text-white">
								{work.company}{' '}
								{index === 0 && (
									<span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium capitalize text-blue-800 transition-all dark:bg-blue-200 dark:text-blue-800">
										Latest
									</span>
								)}
							</h3>
							<span className="mb-2 block text-sm font-normal leading-normal text-gray-400 transition-all dark:text-gray-500">
								{work.role}
							</span>
							<p
								className={`text-base font-normal text-gray-500 transition-all dark:text-gray-400 ${
									work?.list ? 'mb-0' : 'mb-4'
								}`}
							>
								{work.date + ' | ' + work.place}
							</p>
							{work?.list && (
								<ul className="mb-4 ml-4 list-disc text-base font-normal text-gray-600 transition-all dark:text-gray-400">
									{work.list.map((listElement, index) => {
										return <li key={index}>{listElement}</li>
									})}
								</ul>
							)}
						</li>
					))}
				</ol>
			</div>
		</>
	)
}

export default WorkSection
