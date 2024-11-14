import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useUserContext } from "./context/UserContext"

export default function Login() {
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const { loginUser } = useUserContext()

  const navigate = useNavigate()

  function fetchUser() {
    fetch("/api/users?username=" + usernameInput + "&password=" + passwordInput)
      .then(res => res.json())
      .then((data: any) => {
        if (data.callback == "success") {
          loginUser({ userid: data.user.userid, username: data.user.username })
          navigate("/app")
        }
      })
  }
  return (
    <>
      <section className="w-full h-full flex justify-start items-center flex-col">
        <img src="/ceetcar.png" alt="" />
        <section className="w-96 h-96 border-2 rounded-3xl flex flex-col justify-center gap-2">
          <div className="w-full h-24 flex justify-center items-start text-6xl"><div>CEET</div></div>
          <div className="w-full flex "><div className="w-2/5 mx-2">Användarnamn:</div> <input className="border-2" type="text" onChange={(e) => { setUsernameInput(e.target.value) }} /></div>
          <div className="w-full flex "><div className="w-2/5 mx-2">Lösenord:</div> <input className="border-2" type="text" onChange={(e) => { setPasswordInput(e.target.value) }} /></div>
          <div className="w-full flex justify-center "><button className="m-4 p-2 border-2" onClick={fetchUser} >Logga In</button></div>
          <div className="w-full flex justify-center"><Link to="/register" className="text-blue-700 m-4">Registrera istället</Link></div>
        </section>
      </section >
    </>
  )
}
