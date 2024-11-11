import ProfileComponent from "./components/ProfileComponent";

function App() {
  return (
    <>
      <nav className="flex w-100 justify-end h-[8vh] bg-lightblack items-center shadow">
        <ProfileComponent name="Admin Admin" />
      </nav>
    </>
  );
}

export default App;
