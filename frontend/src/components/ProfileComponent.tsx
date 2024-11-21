import { useState } from "react";
import { useUserContext } from "../context/UserContext";

function ProfileComponent() {
  const { user } = useUserContext()
  if (!user) {
    return
  }
  const [processedName] = useState<string>(processName(user?.username));
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false)
  const [ageInput, setAgeInput] = useState<string>()

  function updateAge() {
    const queryBody = { tableVar: "age", newValue: ageInput, userid: user?.userid }
    fetch("/api/users", {
      body: JSON.stringify(queryBody),
      headers: {
        "Content-type": "application/json"
      },
      method: "PATCH"
    })
      .then(() => {
        setShowModal(false)
      })
  }

  function removeAge() {
    const queryBody = { tableVar: "age", newValue: 0, userid: user?.userid }
    fetch("/api/users", {
      body: JSON.stringify(queryBody),
      headers: {
        "Content-type": "application/json"
      },
      method: "PATCH"
    })
      .then(() => {
        setShowModal(false)
      })
  }


  function processName(name: string) {
    return name
  }

  return (
    <>
      <button
        className={`w-[3vw] h-[3vw] border-none rounded-full bg-white flex justify-center items-center text-[1vw] relative
                    transition-all ease-in-out duration-300 shadow-inner-custom hover:shadow-none`}
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        {showMore && (
          <ul className="bg-white absolute w-[8vw] h-[256px] border rounded-2xl top-[100%] right-0 ">
            <button onClick={() => { setShowModal(!showModal) }}>Uppdatera ålder</button>
          </ul>
        )}
        {processedName}
      </button>

      {showModal && (
        <section className="w-screen h-screen bg-white/50 absolute top-0 left-0 z-10 flex justify-center items-center">
          <div className="w-1/4 h-1/2 border-2 rounded-2xl bg-white">
            <div>Ålder</div>
            <ul>
              <li><input type="number" onChange={(e) => { setAgeInput(e.target.value) }} /></li>
              <li>
                <button className="w-1/3 border-2 m-2 p-2 rounded-xl" onClick={() => { updateAge() }}>Bekräfta</button>
                <button className="w-1/3 border-2 m-2 p-2 rounded-xl" onClick={() => { removeAge() }}>Ta Bort</button>
                <button className="w-1/3 border-2 m-2 p-2 rounded-xl" onClick={() => { setShowModal(false) }}>Avbryt</button></li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

export default ProfileComponent;
