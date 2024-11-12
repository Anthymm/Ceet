import { useState } from "react"
import ProfileComponent from "./components/ProfileComponent"
import SidebarComponent from "./components/SidebarComponent"
import { ImSearch } from "react-icons/im"
import FeedCardComponent from "./components/FeedCardComponent"

function App() {
  return (
    <>
      <nav className="flex w-100 justify-end h-[8vh] bg-lightblack items-center shadow">
        <ImSearch className="text-white" />
        <ProfileComponent name="Admin Admin" />
      </nav>
      <div className="h-screen w-screen">
        <SidebarComponent />
        <FeedCardComponent />
      </div>
    </>
  )
}

export default App
