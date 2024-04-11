import { Link } from "react-router-dom";
function HomeContent() {
  const isUserLogged = localStorage.getItem("pr");
  const auth = JSON.parse(isUserLogged);
  let content;
  if (isUserLogged) {
    content = (
      <div>
        Welcome <>{auth.userData.name}</>
      </div>
    );
  } else {
    content = (
      <div className="p-10 flex flex-col gap-6 justify-center items-start  ">
        <h1 className="text-red-700 text-4xl font-bold">
          Protected Routes Project
        </h1>
        <p className="font-bold">Login To Access Routes</p>
        <Link
          className="px-6 py-2 rounded bg-red-700 font-bold hover:bg-red-900  text-white "
          to={"/login"}
        >
          Login
        </Link>
      </div>
    );
  }
  return <>{content}</>;
}

export default HomeContent;
