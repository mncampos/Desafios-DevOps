import { axiosInstance } from "../_base/axiosInstance"

export async function situacaoAmizade(id, id2) {
  const response = await axiosInstance.get(`/usuario/amizade/${id}/${id2}`);

  return response.data;
}
