import { useState } from "react";
import ProfileComponent from "./components/ProfileComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="flex w-100 justify-end h-[8vh] bg-lightblack items-center">
        <ProfileComponent name="Admin Admin" />
      </nav>
    </>
  );
}

export default App;
