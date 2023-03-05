import { userRegister } from "../../API/AUTH/userRegister";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const [userRequest, setUserRequest] = useState({
    email: "",
    password: "",
    nome: "",
    imagemPerfil: "",
    apelido: "",
    dataNascimento: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    try {
      await userRegister(userRequest);
      window.alert("Usuário cadastrado com sucesso.");
      navigate("/");
    } catch (error) {
      if (error.response.status === 500)
        setError("E-mail já existente na database.");
      else setError(error.response.data.message);
    }
  }

  function handleChange(event) {
    setUserRequest({ ...userRequest, [event.target.name]: event.target.value });
  }

  return { error, userRequest, handleChange, handleRegister };
}
