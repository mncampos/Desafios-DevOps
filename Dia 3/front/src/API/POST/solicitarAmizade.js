import { axiosInstance } from "../_base/axiosInstance";

export async function solicitarAmizade(id) {
  const response = await axiosInstance.post(`/usuario/amizades/${id}`);

  return response.data;
}
