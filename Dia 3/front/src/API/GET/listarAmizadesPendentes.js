import { axiosInstance } from "../_base/axiosInstance"

export async function listarAmizadesPendentes() {
  const response = await axiosInstance.get("/usuario/amizades/naoRespondidas");

  return response.data;
}
