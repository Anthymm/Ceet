import ProfileComponent from "./components/ProfileComponent"
import SidebarComponent from "./components/SidebarComponent"
import { ImSearch } from "react-icons/im"
import ContentRouter from "./Routers/ContentRouter"

function App() {
  return (
    <>
      <nav className="flex justify-end h-[8vh] bg-lightblack items-center shadow">
        <div className="flex bg-black rounded-md justify-center items-center p-2">
          <input type="text" className="bg-black rounded-md text-white"></input>
          <ImSearch className="text-white" />
        </div>
        <ProfileComponent />
      </nav>
      <div className="h-screen flex bg-gray">
        <SidebarComponent />
        <ContentRouter />
      </div>
    </>
  )
}

export default App
