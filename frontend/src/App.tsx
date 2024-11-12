import { useState } from "react"
import ProfileComponent from "./components/ProfileComponent"
import SidebarComponent from "./components/SidebarComponent"
import { ImSearch } from "react-icons/im"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="flex w-100 justify-end h-[8vh] bg-lightblack items-center shadow">
        <ImSearch className="text-white" />
        <ProfileComponent name="Admin Admin" />
      </nav>
      <div className="h-screen w-screen">
        <SidebarComponent />
      </div>
    </>
  )
}

export default App
