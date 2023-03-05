import { axiosInstance } from "../_base/axiosInstance"

export async function listarDashboard(page) {
  const response = await axiosInstance.get(`/postagens/feed?page=${page}&size=3&sort=dataPostagem,desc`);

  return response.data;
}
