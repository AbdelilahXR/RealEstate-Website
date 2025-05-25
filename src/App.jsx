import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'


const App = () => {
  return (
    <>
      <div className='w-full  overflow-hidden '>
         <Header/>
         <About></About>
         <Projects></Projects>
      </div>
     
    </>
  )
}

export default App
