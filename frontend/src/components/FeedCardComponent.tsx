export default function FeedCardComponent() {
  return (
    <>
      <h1>Feed</h1>
      <div className=" rounded-xl w-[95%] h-[87%] bg-black flex justify-center p-8">
        <div className="bg-white h-[50%] w-[85%] rounded-lg">
          <div className="flex items-center justify-around pr-5">
            <p>Pic</p>
            <h1>Title </h1>
            <div></div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="bg-gray rounded-md min-h-20 w-[90%] flex items-center justify-center">
              picture
            </div>
            <div className="bg-gray rounded-md min-h-20 w-[90%] p-3 text-sm">
              <p>Host</p> <p>Location</p> <p>Date</p>{" "}
              <p> Anonymus Interested</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
