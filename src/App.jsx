import "./App.css";
import { Outlet } from "react-router-dom";
import LinkPage from "./pages/linkPage.jsx";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="grid grid-cols-6  h-screen w-screen overflow-hidden grid-rows-6">
      <div className=" col-span-6 row-span-1 bg-lime-400  ">
        <Navbar />
      </div>
      <div className="col-span-1 row-span-5  bg-lime-200 p-6 overflow-scroll hidden md:block">
        <LinkPage />
      </div>
      <div className="md:col-span-5 col-span-6 row-span-5  overflow-scroll relative">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
