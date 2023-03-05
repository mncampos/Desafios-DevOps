import { axiosInstance } from "../_base/axiosInstance"

export async function createComment( id, commentContent ) {
  const response = await axiosInstance.put(`/postagens/${id}`, commentContent);

  return response.data;
}
