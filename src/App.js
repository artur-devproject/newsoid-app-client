import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import AppRouter from './pages/AppRouter'
import { StoreContext } from "./context"
import './styles/App.css'

export default function App() {

  const store = React.useContext(StoreContext)
  const fetchPosts = store.fetchPosts[0]
  const fetchSources = store.fetchSources[0]
  const activeSources = store.activeSources[0]

  useEffect(() => {
    fetchPosts()
    fetchSources()
  }, [])

  useEffect(() => {
    if(activeSources.length) localStorage.setItem('activeSources', JSON.stringify(activeSources))
  }, [activeSources])

  return (
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
  )
}
