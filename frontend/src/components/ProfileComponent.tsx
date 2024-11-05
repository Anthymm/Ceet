import { useState } from 'react'
import './ProfileComponent.css'

function ProfileComponent(props: object) {
  const [processedName, setProcessedName] = useState(processName)
  const [showMore, setShowMore] = useState(false)

  function processName() {
    let tempArray = props.name.split(' ')
    tempArray[0] = tempArray[0].slice(0, 1)
    tempArray[1] = tempArray[1].slice(0, 1)
    return (tempArray[0] + tempArray[1])
  }


  return (
    <>
      <button className='profile-button' onClick={() => { setShowMore(!showMore) }}>{processedName}
        {showMore &&
          <ul className='profile-dropdown'>aaaa</ul>
        }
      </button>
    </>
  )
}

export default ProfileComponent
