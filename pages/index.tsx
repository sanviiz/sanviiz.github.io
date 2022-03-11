import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import TableOfContents from '@components/TableOfContents/TableOfContents'
import HeroSection from '@components/HeroSection/HeroSection'
import EducationSection from '@components/EducationSection/EducationSection'
import SkillSection from '@components/SkillSection/SkillSection'
import WorkSection from '@components/WorkSection/WorkSection'
import TechnicalProjectSection from '@components/TechnicalProjectSection/TechnicalProjectSection'
import BusinessProjectSection from '@components/BusinessProjectSection/BusinessProjectSection'
import ContactSection from '@components/ContactSection/ContactSection'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Pakkaphong Akkabut - All about Sanviiz</title>
				<meta name="theme-color" content="#ffffff" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/images/SEO_banner.png" />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:image" content="/images/SEO_banner.png" />
				<meta
					name="description"
					content="Hi, I'm Pakkaphong Akkabut A front end developer and interested in the full stack developer - Sanviiz"
				/>
				<link rel="icon" href="/favicon.svg" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="keywords"
					content="sanviiz, Sanviiz, sanviiz.dev, sanviiz dev, sanviiz dev home, sanviiz home, index, sanviiz pakkaphong, Pakkaphong, Pakkaphong Akkabut, front end, frontend, front-end, frontend developer, frontend dev, full-stack, full stack, dev"
				/>
				<meta property="og:url" content="https://sanviiz.github.io/" />
				<meta property="twitter:url" content="https://sanviiz.github.io/" />
				<meta property="twitter:title" content="Pakkaphong Akkabut - All about Sanviiz" />
				<meta
					property="twitter:description"
					content="Hi, I'm Pakkaphong Akkabut A front end developer and interested in the full stack developer - Sanviiz"
				/>
				<meta property="og:title" content="Pakkaphong Akkabut - All about Sanviiz" />
				<meta
					property="og:description"
					content="Hi, I'm Pakkaphong Akkabut A front end developer and interested in the full stack developer - Sanviiz"
				/>
			</Head>
			{/* Global site tag (gtag.js) - Google Analytics */}
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `}
			</Script>
			<div className="container mx-auto max-w-5xl px-2 py-4 pt-6 xs:px-8 md:pt-4 xl:px-0">
				<HeroSection />
				<hr className="my-4 border-gray-200 transition-all dark:border-gray-700 sm:mx-auto md:my-6" />
				<div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-4">
					<div>
						<TableOfContents />
					</div>
					<div className="lg:col-span-3">
						<EducationSection />
						<SkillSection />
						<WorkSection />
						<TechnicalProjectSection />
						<BusinessProjectSection />
					</div>
				</div>
				<hr className="my-4 border-gray-200 transition-all dark:border-gray-700 sm:mx-auto md:my-6" />
				<ContactSection />
			</div>
		</>
	)
}

export default Home
