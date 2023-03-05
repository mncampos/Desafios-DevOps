import { useGlobalUser } from "../../Context/useGlobalUser";
import { userLogout } from "../../API/api_index.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const [, setUser] = useGlobalUser();
  const navigate = useNavigate();
  useEffect(() => {
    async function logout() {
      try {
        await userLogout();
        setUser(null);
        window.alert("Logout feito com sucesso.");
        navigate('/');
      } catch (error) {
        window.alert("Erro ao realizar logout.");
      }
    }
    logout();
  }, [navigate, setUser]);
}
