import React from 'react'
import Topbar from './components/Navbar/Topbar'
import Bottombar from './components/Navbar/Bottombar'
import Intro from './components/Intro/Intro'
import About from './components/About/About'

function App() {
  return (
    <div className='w-full'>
        <Topbar/>
        <Intro/>
        <About/>
        <Bottombar/>
    </div>
  )
}

export default App
