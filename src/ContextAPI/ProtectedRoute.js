import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

function ProtectedRoute({ children }) {
  const { user } = useUserAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]); //react-hooks/exhaustive-deps

  if (user) {
    return children;
  }
}

export default ProtectedRoute;
