import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function LinkPage() {
  const location = useLocation();
  return (
    <div>
      <div className="flex justify-center flex-col gap-4 items-center text-2xl mb-4 ">
        <h1 className="font-bold  uppercase">Open Routes</h1>
        <Link
          className={`w-full text-center py-2 rounded-md transition-all duration-200 hover:text-lime-50 ${
            location.pathname === "/home" ? "active-link" : "hover:bg-lime-400 "
          }`}
          to={"/home"}
        >
          Home
        </Link>
        <Link
          className={` w-full text-center py-2 rounded-md transition-all duration-200 hover:text-lime-50 ${
            location.pathname === "/about" ? "active-link" : "hover:bg-lime-400"
          }`}
          to={"/about"}
        >
          About
        </Link>
        <Link
          className={`w-full text-center py-2 rounded-md transition-all duration-200 hover:text-lime-50 ${
            location.pathname === "/contact"
              ? "active-link"
              : "hover:bg-lime-400"
          }`}
          to={"/contact"}
        >
          Contact
        </Link>
      </div>
      <div className="flex justify-center flex-col gap-4 items-center text-2xl">
        <h1 className="font-bold ">Protected Routes</h1>
        <Link
          className={`w-full text-center py-2 rounded-md transition-all duration-200 hover:text-lime-50 ${
            location.pathname === "/editor"
              ? "active-link"
              : "hover:bg-lime-400"
          }`}
          to={"/editor"}
        >
          Editor
        </Link>
        <Link
          className={` w-full text-center py-2 rounded-md transition-all duration-200 hover:text-lime-50 ${
            location.pathname === "/admin" ? "active-link" : "hover:bg-lime-400"
          }`}
          to={"/admin"}
        >
          Admin
        </Link>
        <Link
          className={`w-full text-center py-2 rounded-md transition-all duration-200 hover:text-lime-50 ${
            location.pathname === "/lounge"
              ? "active-link"
              : "hover:bg-lime-400"
          }`}
          to={"/lounge"}
        >
          Lounge
        </Link>
      </div>
    </div>
  );
}

export default LinkPage;
