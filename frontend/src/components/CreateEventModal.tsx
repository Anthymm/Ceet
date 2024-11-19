import { useState } from "react"

export default function CreateEventModal() {
  const [displayModal, setDisplayModal] = useState(false)
  const [title, setTitle] = useState("")
  const [host, setHost] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")

  function addEvent() {
    const bodyQuery = { eventtitle: title, host: host, location: location, date: date, interested: 0 }
    fetch("/api/feed", {
      body: JSON.stringify(bodyQuery),
      headers: {
        "Content-type": "application/json"
      },
      method: "POST"
    })
    setDisplayModal(!displayModal)
  }
  return (
    <>
      <button onClick={() => setDisplayModal(!displayModal)}>Lägg till Evenemang</button>
      {displayModal && <section className="w-screen h-screen bg-black absolute inset-0 flex justify-center items-center">
        <div className="w-96 h-96 bg-gray rounded-2xl">
          <div className="w-full h-24 flex justify-center items-start text-4xl"><div>Lägg till Evenemang</div></div>
          <div className="w-full flex "><div className="w-2/5 mx-2">Event-Namn:</div> <input className="border-2" type="text" onChange={(e) => { setTitle(e.target.value) }} /></div>
          <div className="w-full flex "><div className="w-2/5 mx-2">Värd:</div> <input className="border-2" type="text" onChange={(e) => { setHost(e.target.value) }} /></div>
          <div className="w-full flex "><div className="w-2/5 mx-2">Plats:</div> <input className="border-2" type="text" onChange={(e) => { setLocation(e.target.value) }} /></div>
          <div className="w-full flex "><div className="w-2/5 mx-2">Datum:</div> <input className="border-2" type="date" onChange={(e) => { setDate(e.target.value) }} /></div>
          <div className="w-full flex justify-center "><button className="m-4 p-2 border-2" onClick={() => addEvent()} >Lägg till</button><button className="m-4 p-2 border-2" onClick={() => setDisplayModal(!displayModal)}>Avbryt</button></div>
        </div>
      </section>}
    </>
  )
}
