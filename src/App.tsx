import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tooltip from 'intergalactic/tooltip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tooltip title="Hello world" visible>Tooltip Trigger</Tooltip>
    </>
  )
}

export default App
