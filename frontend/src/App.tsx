import ProfileComponent from "./components/ProfileComponent"
import SidebarComponent from "./components/SidebarComponent"
import { ImSearch } from "react-icons/im"
import ContentRouter from "./Routers/ContentRouter"


function App() {
  return (
    <>
      <nav className="flex w-100 justify-end h-[8vh] bg-lightblack items-center shadow">
        <ImSearch className="text-white" />
        <ProfileComponent />
      </nav>
      <div className="h-screen w-screen flex bg-gray">
        <SidebarComponent />
        <ContentRouter />
      </div>
    </>
  )
}

export default App
