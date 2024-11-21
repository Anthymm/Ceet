import { useEffect, useState } from 'react'
import CreateEventModal from './CreateEventModal'

export default function FeedCardComponent() {
  const [contentArray, setContentArray] = useState([])

  useEffect(() => {
    fetch("/api/feed")
      .then(res => res.json())
      .then((data) => {
        console.log(data.events)
        if (data.callback == "success") {
          setContentArray(data.events)
        }
      })
  }, [])
  return (
    <>
      <h1>Feed <CreateEventModal /> </h1>
      <div className=" rounded-xl w-[95%] h-[87%] bg-black flex justify-center p-8">
        {contentArray.map((item, index) => <div className="bg-white h-[50%] w-[85%] rounded-lg">
          <div key={index} className="flex items-center justify-around pr-5">
            <p>Pic </p>
            <h1>{item.eventtitle}</h1>
            <div></div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="bg-gray rounded-md min-h-20 w-[90%] flex items-center justify-center">
              picture
            </div>
            <div className="bg-gray rounded-md min-h-20 w-[90%] p-3 text-sm">
              <p>{item.host}</p> <p>{item.location}</p> <p>{item.date.substr(0, 10)}</p>{" "}
              <p> {item.interested} <button>+</button></p>
            </div>
          </div>
        </div>)}
      </div>
    </>
  )
}
