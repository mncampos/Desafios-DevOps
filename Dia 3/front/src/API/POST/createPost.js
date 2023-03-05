import { axiosInstance } from "../_base/axiosInstance"

export async function createPost( postContent ) {
  const response = await axiosInstance.post("/postagens/postar", postContent);

  return response.data;
}
