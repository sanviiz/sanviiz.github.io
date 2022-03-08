import React, { FC } from 'react'
import { Theme } from '@helper/types'
export interface SharedState {
	theme: Theme
	setTheme?: (value: Theme) => void
}

type Props = {
	value: SharedState
}

export const defaultState: SharedState = {
	theme: 'light',
}

const AppContext = React.createContext<SharedState>(defaultState)

export const ContextWrapper: FC<Props> = ({ children, value }) => {
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => React.useContext<SharedState>(AppContext)
