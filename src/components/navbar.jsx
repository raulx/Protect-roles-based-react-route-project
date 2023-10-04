import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../hooks/userAuth";
import { FaBars, FaTimes } from "react-icons/fa";
import LinkPage from "../pages/linkPage";
import { useState } from "react";

function Navbar() {
  const { reset } = UserContext();
  const [phoneNav, setPhoneNav] = useState(false);
  const isLoggedIn = localStorage.getItem("user");
  const auth = JSON.parse(isLoggedIn);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    reset();
    navigate("/");
  };
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <nav className="flex  items-center justify-between px-4 w-full">
          <h1 className="text-4xl hidden md:block uppercase font-extrabold text-white bg-red-600 p-4 rounded">
            Protected Routes
          </h1>
          <div
            className="md:hidden text-4xl font-bold block cursor-pointer"
            onClick={() => {
              setPhoneNav(!phoneNav);
            }}
          >
            {!phoneNav ? <FaBars /> : <FaTimes />}
          </div>
          <h1 className="text-2xl  md:hidden uppercase font-bold text-white bg-red-600 p-4 rounded">
            Protected Routes
          </h1>
          <ul className="justify-between hidden md:flex items-center p-4 gap-4 text-2xl mr-4">
            {isLoggedIn ? (
              <>
                <Link
                  className="hover:bg-white  hover:text-lime-900 py-1 px-4 rounded-xl transition-all duration-200"
                  to={"/profile"}
                >
                  {auth.userData.name}
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:bg-white  hover:text-lime-900 py-1 px-4 rounded-xl transition-all duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to={"/login"}
                className="hover:bg-white  hover:text-lime-900 py-1 px-4 rounded-xl transition-all duration-200"
              >
                Login
              </Link>
            )}
          </ul>
        </nav>
      </div>
      {/* navLinks for mobile layout */}
      <div
        className={`${
          !phoneNav ? "relative -left-full" : "relative left-0"
        } transition-all duration-200 h-screen overflow-scroll bg-lime-700 text-white md:hidden w-96 z-10`}
      >
        <ul className="text-5xl">
          <LinkPage />
        </ul>
      </div>
    </>
  );
}

export default Navbar;
