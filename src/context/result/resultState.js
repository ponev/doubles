import React, {useReducer} from 'react'
import {ResultContext} from './resultContext'
import {ResultReducer} from './resultReducer'
import {SET_LOADING} from '../types'

export const ResultState = ({children}) => {
  const initialState = {
    loading: false
  }

  const [state, dispatch] = useReducer(ResultReducer, initialState)

  const setLoading = () => dispatch({type: SET_LOADING})

  const {loading} = state

  return (
    <ResultContext.Provider value={{
      setLoading,
      loading
    }}>
      {children}
    </ResultContext.Provider>
  )
}