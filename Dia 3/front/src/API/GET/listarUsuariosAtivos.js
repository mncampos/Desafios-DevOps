import { axiosInstance } from "../_base/axiosInstance"

export async function listarUsuariosAtivos() {
  const response = await axiosInstance.get('/usuario/listar');

  return response.data;
}
