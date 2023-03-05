import { useState } from "react";
import { userLogin } from "../../API/AUTH/userLogin";
import { useGlobalUser } from "../../Context/useGlobalUser";

export function useLogin() {
  const [, setUser] = useGlobalUser();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const res = await userLogin(
        userCredentials.email,
        userCredentials.password
      );
      setUser(res);
    } catch (error) {
      if (error.response.status === 401) setError("Credenciais inválidas.");
      else setError(error.response.data.message);
    }
  }

  function handleChange(event) {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    });
  }

  return { handleLogin, userCredentials, handleChange, error };
}
