import { axiosInstance } from "../_base/axiosInstance"

export async function userRegister( userRequest ) {
  const response = await axiosInstance.post("/usuarios", {
    nome: userRequest.nome,
    senha: userRequest.password,
    email: userRequest.email,
    permissoes: ['USUARIO'],
    imagemPerfil: userRequest.imagemPerfil,
    apelido: userRequest.apelido,
    dataNascimento: userRequest.dataNascimento
  });

  return response.data;
}
