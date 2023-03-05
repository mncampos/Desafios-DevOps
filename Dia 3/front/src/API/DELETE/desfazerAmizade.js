import { axiosInstance } from "../_base/axiosInstance";

export async function desfazerAmizade(id) {
  const response = await axiosInstance.delete(`/usuario/amizade/${id}`);

  return response.data;
}
