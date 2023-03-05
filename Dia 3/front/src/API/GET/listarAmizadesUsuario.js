import { axiosInstance } from "../_base/axiosInstance"

export async function listarAmizadesUsuario(id) {
  const response = await axiosInstance.get(`/usuario/amizades/${id}`);

  return response.data;
}
