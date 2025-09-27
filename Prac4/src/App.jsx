import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './components/demo.jsx'
import Democlass from './components/class.jsx'
import Increment from './components/increment.jsx'
import Hooks from './components/Hooks.jsx'

function App() {
  return (
    <>
      {/* <Demo dept="Function Component" inst="CSPIT"/>  
      <Democlass dept="Class Component" inst="CSPIT"/>
      <Increment/> */}
      <Hooks title="Hooks Component"/>
    </>
  )
}

export default App
