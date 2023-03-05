import { axiosInstance } from "../_base/axiosInstance";

export async function editarPerfil(request) {
  const response = await axiosInstance.put(
    `/usuario`, request );
  return response.data;
}
