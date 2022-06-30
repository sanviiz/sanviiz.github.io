import React, { FC } from 'react'
import { TableContents } from '@helper/types'

const TableOfContents: FC = () => {
	const contentList: TableContents[] = [
		{
			label: 'Education',
			link: '#education',
		},
		{
			label: 'Skills',
			link: '#skills',
		},
		{
			label: 'Work Experience',
			link: '#workexperience',
		},
		{
			label: 'Technical Projects',
			link: '#technicalprojects',
		},
		{
			label: 'Business Projects',
			link: '#businessprojects',
		},
		{
			label: 'Contact',
			link: '#contact',
		},
	]

	return (
		<>
			<div className="overflow-hidden rounded-lg shadow-md lg:sticky lg:top-16">
				<table className="min-w-full">
					<thead className="bg-gray-100 transition-all dark:bg-gray-700">
						<tr>
							<th
								scope="col"
								className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider text-gray-700 transition-all dark:text-gray-400"
							>
								Table of contents
							</th>
						</tr>
					</thead>
					<tbody>
						{contentList.map((record, index) => (
							<tr
								className={`bg-white transition-all dark:bg-gray-800 ${
									index !== contentList.length - 1
										? 'border-b dark:border-gray-700'
										: ''
								}`}
								key={index}
							>
								<td
									className="cursor-pointer whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 transition-all hover:underline dark:text-white"
									onClick={() =>
										document.querySelector(record.link).scrollIntoView({
											behavior: 'smooth',
										})
									}
								>
									{record.label}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default TableOfContents
