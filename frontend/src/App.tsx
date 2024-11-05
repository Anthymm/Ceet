import { useState } from 'react'
import ProfileComponent from './components/ProfileComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav><ProfileComponent name="Admin Admin" /></nav>
    </>
  )
}

export default App
