import { Routes, Route } from "react-router-dom"
import FeedCardComponent from "../components/FeedCardComponent"
import CardLayout from "../Layouts/CardContainerLayout"
import ProfileCardComponent from "../components/ProfileCardComponent"
import EventCardComponent from "../components/EventCardComponent"

export default function ContentRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CardLayout />}>
          <Route index element={<FeedCardComponent />} />
          <Route path="profile" element={<ProfileCardComponent />} />
          <Route path="event" element={<EventCardComponent />} />
        </Route>
      </Routes>
    </>
  )
}
