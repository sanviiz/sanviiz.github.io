import React, { FC } from 'react'

const TableOfContents: FC = () => {
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
						<tr className="border-b bg-white transition-all dark:border-gray-700 dark:bg-gray-800">
							<td className="cursor-pointer whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 transition-all hover:underline dark:text-white">
								Education
							</td>
						</tr>
						<tr className="border-b bg-white transition-all dark:border-gray-700 dark:bg-gray-800">
							<td className="cursor-pointer whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 transition-all hover:underline dark:text-white">
								Skills
							</td>
						</tr>
						<tr className="border-b bg-white transition-all dark:border-gray-700 dark:bg-gray-800">
							<td className="cursor-pointer whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 transition-all hover:underline dark:text-white">
								Technical projects
							</td>
						</tr>
						<tr className="border-b bg-white transition-all dark:border-gray-700 dark:bg-gray-800">
							<td className="cursor-pointer whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 transition-all hover:underline dark:text-white">
								Business projects
							</td>
						</tr>
						<tr className="bg-white transition-all dark:bg-gray-800">
							<td className="cursor-pointer whitespace-nowrap py-4 px-6 text-sm font-medium text-gray-900 transition-all hover:underline dark:text-white">
								Contact
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default TableOfContents
