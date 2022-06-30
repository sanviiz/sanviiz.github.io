import React, { FC } from 'react'

const SkillSection: FC = () => {
	return (
		<>
			<span className="relative text-3xl font-normal text-gray-500 transition-all dark:text-gray-300">
				Skills
				<div className="absolute -top-16" id="skills" />
			</span>
			<div className="pt-4 pb-6">
				<div className="mb-4 rounded-lg border border-gray-200 p-4 transition-all dark:border-gray-700">
					<h3 className="mb-1 text-lg font-semibold uppercase text-gray-900 transition-all dark:text-white">
						Technical skills
					</h3>
					<span className="mb-2 block text-sm font-normal leading-normal text-gray-400 transition-all dark:text-gray-500">
						Skilful in:
					</span>
					<p className="mb-2 text-base font-normal text-gray-500 transition-all dark:text-gray-400">
						Python 3, JavaScript (ES6), Node.js, C/C++, React, SQL, HTML5, CSS3, Git,
						Agile (Trello), Linux, IoT, Arduino, Adobe creative cloud, Vim
					</p>
					<span className="mb-2 block text-sm font-normal leading-normal text-gray-400 transition-all dark:text-gray-500">
						And have some experienced about:
					</span>
					<p className="text-base font-normal text-gray-500 transition-all dark:text-gray-400">
						TypeScript, Java, Spring, MIPS assembly, ARM Cortex-M0, Golang, Vue, NoSQL,
						SCSS, UX/UI design
					</p>
				</div>
				<div className="rounded-lg border border-gray-200 p-4 transition-all dark:border-gray-700">
					<h3 className="mb-1 text-lg font-semibold uppercase text-gray-900 transition-all dark:text-white">
						Soft skills
					</h3>
					<span className="mb-2 block text-sm font-normal leading-normal text-gray-400 transition-all dark:text-gray-500">
						Outstanding:
					</span>
					<p className="text-base font-normal text-gray-500 transition-all dark:text-gray-400">
						Public speaker, Leader, Teaching, Motivator
					</p>
				</div>
			</div>
		</>
	)
}

export default SkillSection
