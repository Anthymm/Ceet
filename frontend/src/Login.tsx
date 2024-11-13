import { useState } from "react"

export default function Login() {
  const [usernameInput, setUsernameInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [ageInput, setAgeInput] = useState("")

  const [bodyQuery, setBodyQuery] = useState({})

  function fetchUser() {
    setBodyQuery({ username: usernameInput, password: passwordInput, email: emailInput, age: ageInput })
    console.log({ username: usernameInput, password: passwordInput, email: emailInput, age: ageInput })

    // fetch("/api/users", {
    //   body: JSON.stringify(bodyQuery),
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   method: "POST"
    // })
  }
  return (
    <>
      <section className="w-96 h-96 border-2 rounded-3xl flex flex-col justify-center gap-2">
        <div className="w-full flex "><div className="w-2/5 mx-2">Användarnamn:</div> <input className="border-2" type="text" onChange={(e) => { setUsernameInput(e.target.value) }} /></div>
        <div className="w-full flex "><div className="w-2/5 mx-2">Lösenord:</div> <input className="border-2 flex justify-self-start" type="text" onChange={(e) => { setPasswordInput(e.target.value) }} /></div>
        <div className="w-full flex r"><div className="w-2/5 mx-2">Email:</div> <input className="border-2" type="text" onChange={(e) => { setEmailInput(e.target.value) }} /></div>
        <div className="w-full flex "><div className="w-2/5 mx-2">Ålder:</div> <input className="border-2" type="number" onChange={(e) => { setAgeInput(e.target.value) }} /></div>
        <div className="w-full flex justify-center "><button className="m-4 p-2 border-2" onClick={fetchUser} >Registrera</button></div>
      </section>
    </>
  )
}
