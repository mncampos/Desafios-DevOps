import { axiosInstance } from "../_base/axiosInstance";

export async function changeVisibility(id, request) {
  const response = await axiosInstance.put(`/postagens/editar/${id}`, request);
  return response.data;
}
