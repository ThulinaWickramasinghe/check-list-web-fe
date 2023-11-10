'use client'

/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import store from '.'

export const Providers = (props) => {
  return <Provider store={store}>{props.children}</Provider>
}