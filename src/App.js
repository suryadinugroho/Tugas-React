import React from 'react'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Navigation from './components/Navigation'
import './App.css'


const App = () => {
  return (
    <div>
      <Navigation />
      <MainPage />
      <Footer />
    </div>
  )
}

export default App