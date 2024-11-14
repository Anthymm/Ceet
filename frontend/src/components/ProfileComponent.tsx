import { useState } from "react";
import { useUserContext } from "../context/UserContext";

function ProfileComponent() {
  const { user } = useUserContext()
  const [processedName] = useState<string>(processName(user?.username));
  const [showMore, setShowMore] = useState<boolean>(false);


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
