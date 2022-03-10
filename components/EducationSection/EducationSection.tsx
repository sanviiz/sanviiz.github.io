import React, { FC } from 'react'
import { Education } from '@helper/types'

const EducationSection: FC = () => {
	const educationList: Education[] = [
		{
			academy: 'KMUTT',
			program: 'Bachelor of Engineering in Electronic and Telecommunication Engineering',
			description:
				'Present, King Mongkut’s University of Technology Thonbury 4rd Year Student',
		},
		{
			academy: 'Codemobiles online course',
			program: 'Warehousing Department on Web Application',
			description: 'By using Stacks which are',
			list: [
				'Frontend: React.js with AdminLTE Theme',
				'Backend: Node.js and Express.js with Sequelize ORM on SQLite database engine',
			],
		},
		{
			academy: 'Sisaket wittayalai school',
			program: 'Science and Mathematics Program',
			description: 'Graduated April 2018',
			link: '/files/sanviiz_portfolio.pdf',
		},
	]

	return (
		<>
			<span className="text-3xl font-normal text-gray-500 transition-all dark:text-gray-300">
				Education
			</span>
			<div className="pt-4 pl-4">
				<ol className="relative border-l border-gray-200 transition-all dark:border-gray-700">
					{educationList.map((education, index) => (
						<li
							className={`ml-6 ${
								index === educationList.length - 1 ? 'mb-6' : 'mb-10'
							}`}
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
								{education.academy}{' '}
								{index === 0 && (
									<span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium capitalize text-blue-800 transition-all dark:bg-blue-200 dark:text-blue-800">
										Latest
									</span>
								)}
							</h3>
							<span className="mb-2 block text-sm font-normal leading-normal text-gray-400 transition-all dark:text-gray-500">
								{education.program}
							</span>
							<p
								className={`text-base font-normal text-gray-500 transition-all dark:text-gray-400 ${
									education?.list ? 'mb-0' : 'mb-4'
								}`}
							>
								{education.description}
							</p>
							{education?.list && (
								<ul className="mb-4 ml-[20px] list-disc text-base font-normal text-gray-500 transition-all dark:text-gray-400">
									{education.list.map((listElement, index) => {
										return <li key={index}>{listElement}</li>
									})}
								</ul>
							)}
							{education?.link && (
								<a
									href={education.link}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-black dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
								>
									More Information{' '}
									<svg
										className="ml-2 h-3 w-3"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</a>
							)}
						</li>
					))}
				</ol>
			</div>
		</>
	)
}

export default EducationSection
