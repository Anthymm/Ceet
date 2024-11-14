import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login() {
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [ageInput, setAgeInput] = useState("")
  const [acceptedPolicy, setAcceptedPolicy] = useState(true)

  const navigate = useNavigate()

  function fetchUser() {
    if (usernameInput || passwordInput || emailInput || ageInput == "") {
      console.log("du har glömt att fylla i en ruta")
    } else {
      const bodyQuery = { username: usernameInput, password: passwordInput, email: emailInput, age: ageInput }
      fetch("/api/users", {
        body: JSON.stringify(bodyQuery),
        headers: {
          "Content-type": "application/json",
        },
        method: "POST"
      })
        .then(res => res.json)
        .then((data) => navigate("/app"))
    }
  }
  return (
    <>
      <section className="w-full h-full flex justify-start items-center flex-col">
        <img src="/ceetcar.png" alt="" />
        <section className="w-96 h-96 border-2 rounded-3xl flex flex-col justify-center gap-2">
          <div className="w-full h-24 flex justify-center items-start text-6xl"><div>CEET</div></div>
          <div className="w-full flex "><div className="w-2/5 mx-2">Användarnamn:</div> <input className="border-2" type="text" onChange={(e) => { setUsernameInput(e.target.value) }} /></div>
          <div className="w-full flex "><div className="w-2/5 mx-2">Lösenord:</div> <input className="border-2 flex justify-self-start" type="text" onChange={(e) => { setPasswordInput(e.target.value) }} /></div>
          <div className="w-full flex r"><div className="w-2/5 mx-2">Email:</div> <input className="border-2" type="text" onChange={(e) => { setEmailInput(e.target.value) }} /></div>
          <div className="w-full flex "><div className="w-2/5 mx-2">Ålder:</div> <input className="border-2" type="number" onChange={(e) => { setAgeInput(e.target.value) }} /></div>
          <div className="w-full flex gap-1 justify-center"><input type="checkbox" onChange={(e) => { setAcceptedPolicy(e.target.checked) }} />Godkänn våran<Link to="/integrity" className="text-blue-700">Integritetspolicy</Link></div>
          <div className="w-full flex justify-center "><button className="m-4 p-2 border-2" onClick={fetchUser} disabled={!acceptedPolicy}>Registrera</button></div>
          <div className="w-full flex justify-center" ><Link to="/" className="text-blue-700">Logga in istället?</Link></div>
        </section>
      </section >
    </>
  )
}
