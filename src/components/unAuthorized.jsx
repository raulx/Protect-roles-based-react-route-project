import { useLocation } from "react-router-dom";

export function UnAuthorized() {
  const location = useLocation();
  return (
    <div>
      <h1>{location.state.message}</h1>You Are Not Authorized
    </div>
  );
}
