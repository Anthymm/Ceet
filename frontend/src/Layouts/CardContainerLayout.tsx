import { Outlet } from "react-router-dom"

export default function CardLayout() {
  return (
    <>
      <section className="w-1/3 h-3/4 border-2 rounded-3xl my-24 mx-96" >
        <Outlet />
      </section>
    </>
  )
}
