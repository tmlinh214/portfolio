import React from 'react'
import './styles.css'
import Header from './Header'
import Home from './components/Home'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
function App() {
  return (
    <main>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
    
  )
}

export default App