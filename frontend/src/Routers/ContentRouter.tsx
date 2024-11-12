import { BrowserRouter, Routes, Route } from "react-router-dom"
import FeedCardComponent from "../components/FeedCardComponent"

export default function ContentRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<FeedCardComponent />} />
            {/* <Route path="profile" element={<ProfileComponent/>} />*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
