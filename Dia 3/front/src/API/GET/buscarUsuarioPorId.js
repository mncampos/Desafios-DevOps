import { axiosInstance } from "../_base/axiosInstance";

export async function buscaPorId(id) {
  const response = await axiosInstance.get(`/usuario/${id}`);

  return response.data;
}
