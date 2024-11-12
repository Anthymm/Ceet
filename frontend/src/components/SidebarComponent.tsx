import { MdKeyboardArrowLeft } from "react-icons/md"
import { MdKeyboardArrowRight } from "react-icons/md"

function SidebarComponent() {
  return (
    <div className=" w-[15%] h-full bg-black  ">
      {/* <div className="w-full  flex justify-end">
        <MdKeyboardArrowLeft className="text-white size-10" />
      </div> */}
      <div className="flex flex-col items-center">
        <div className="flex w-52 bg-primary h-16 rounded-lg items-center justify-center cursor-pointer font-medium text-2xl mt-6">
          Feed
        </div>
        <div className="text-white">______________</div>
        <div>
          <div className="bg-gray text-white w-36 h-12 rounded-md items-center flex justify-center mt-2 ">
            Lorem ipsum
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarComponent
