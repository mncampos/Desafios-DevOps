import { Navigate } from "react-router-dom";
import { useGlobalUser } from "../Context/useGlobalUser"

function PrivateRoute({ Screen }) {
  const [user] = useGlobalUser();

  if (user) {
    return <Screen />;
  }

  return <Navigate to={"/"} />;
}

export default PrivateRoute;
