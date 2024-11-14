import { Outlet } from "react-router-dom"

export default function CardLayout() {
  return (
    <>
      <section className="w-1/3 h-5/6 border-2 rounded-3xl my-10 mx-96 bg-primary border-none flex flex-col items-center justify-center">
        <Outlet />
      </section>
    </>
  )
}
