import React, { FC, ReactNode } from 'react'
import { RevealerStatus } from '@helper/types'
import Baffle from 'baffle-react'
import styles from './PageRevealer.module.css'
import { useAppContext } from '@hooks/context'

const PageRevealer: FC = () => {
	const context = useAppContext()
	const [revealerStatus, setRevealerStatus] = React.useState<RevealerStatus>({
		animation: false,
		complete: false,
		hide: false,
	})

	const reveal = (): void => {
		if (!revealerStatus.complete) {
			setRevealerStatus({ ...revealerStatus, animation: true, complete: true })
			setTimeout(() => {
				document.getElementById('reveal_container').style.backgroundColor = 'transparent'
				setTimeout(() => {
					setRevealerStatus({ ...revealerStatus, animation: false, hide: true })
				}, 500)
			}, 400)
		}
	}

	React.useEffect(() => {
		setTimeout(() => {
			reveal()
		}, 2000)
	})

	const baffle = (): ReactNode => {
		if (!revealerStatus.complete) {
			return (
				<div className="animate__animated animate__fadeIn">
					<Baffle
						speed={50}
						characters={'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*'}
						obfuscate={false}
						update={true}
						revealDuration={500}
						revealDelay={1000}
					>
						Sanviiz
					</Baffle>
				</div>
			)
		}
	}

	return (
		<>
			<div
				id="reveal_container"
				className={`${styles.RevealContainer} ${
					context.theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
				}`}
				style={{ display: revealerStatus.hide ? 'none' : 'flex' }}
			>
				{baffle()}
				<div
					id="revealer"
					className={`${styles.Reveal} ${
						context.theme === 'dark' ? 'bg-gray-800' : 'bg-black'
					} ${revealerStatus.animation ? styles.RevealAnimate : ''}`}
				/>
			</div>
		</>
	)
}

export default PageRevealer
