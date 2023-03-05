import { useNavigate } from "react-router-dom";
import { editarPerfil } from "../../API/PUT/editProfile";
import { useGlobalUser } from "../../Context/useGlobalUser";
import { useState } from "react";
export function useEditProfile() {
  const [user] = useGlobalUser();
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState({
    nome: user.nome,
    apelido: user.apelido,
    imagemPerfil: user.imagemPerfil,
    animeFavorito: user.animeFavorito,
  });
  const [erro, setErro] = useState("");

  function handleChange(event) {
    setUserProfile({ ...userProfile, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await editarPerfil(userProfile);
      navigate("/perfil");
    } catch (error) {
      setErro(error.response.data.message);
    }
  }

  return { handleSubmit, handleChange, userProfile, erro };
}
