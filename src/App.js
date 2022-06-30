import Main from "./components/Main";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="w-full bg-black selection:bg-yellow selection:text-black">
      <div className="flex flex-col xl:flex-row gap-8 py-16 sm:px-14 xl:px-32 px-4 md:px-28">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
