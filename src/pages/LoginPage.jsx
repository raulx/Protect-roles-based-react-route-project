import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../hooks/userAuth";
function LoginPage() {
  const [userId, setUserId] = useState("");
  const [inputError, setInputError] = useState(false);
  const { authUser } = UserContext();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/home";
  const locationMessage = location.state && location.state.message;

  const handleClick = () => {
    if (userId === "" || userId === 0 || userId < 0) {
      setInputError(true);
    } else {
      authUser(userId)
        .then((response) => {
          const userData = response;
          // console.log(userData);
          localStorage.setItem(
            "user",
            JSON.stringify({
              auth: true,
              userData: userData.data,
              roles: userData.data.roles,
            })
          );
          setUserId("");
          navigate(from, { replace: true });
        })
        .catch((err) => {
          setInputError(true);
          console.log(`Error Occured:${err}`);
        });
    }
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setUserId(value);
    setInputError(false);
  };
  return (
    <>
      <div className="flex flex-col p-6 gap-6 items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl border rounded-2xl bg-lime-300 w-96 h-96">
        {locationMessage ? <p>{locationMessage}</p> : null}
        <h1 className="text-2xl ">Login With Your Id Number.</h1>
        <input
          className="p-4 w-full rounded-xl  border"
          type="number"
          placeholder="Enter your id number"
          autoFocus
          value={userId}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="mt-2 bg-red-700 px-10 py-3 uppercase font-bold hover:bg-red-900 transition-all duration-200 text-xl rounded-xl text-white"
          onClick={handleClick}
        >
          Login
        </button>
        {inputError && <p>Invalid User Id !</p>}
      </div>
    </>
  );
}

export default LoginPage;
