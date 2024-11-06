import { useState } from "react";

function ProfileComponent(props: object) {
  const [processedName, setProcessedName] = useState(processName);
  const [showMore, setShowMore] = useState(false);

  function processName() {
    let tempArray = props.name.split(" ");
    tempArray[0] = tempArray[0].slice(0, 1);
    tempArray[1] = tempArray[1].slice(0, 1);
    return tempArray[0] + tempArray[1];
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
        {processedName}
        {showMore && (
          <ul className="bg-white absolute w-[8vw] h-[256px] border rounded-2xl top-[100%] right-0 ">
            aaaa
          </ul>
        )}
      </button>
    </>
  );
}

export default ProfileComponent;
