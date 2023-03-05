import { axiosInstance } from "../_base/axiosInstance";

export async function buscarPosts(id) {
  const response = await axiosInstance.get(`/postagens/${id}`);

  return response.data;
}
