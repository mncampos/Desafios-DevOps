import { axiosInstance } from "../_base/axiosInstance";

export async function commentReaction(id, reaction) {
  const response = await axiosInstance.put(
    `/postagens/${reaction}/comentario/${id}`
  );
  return response.data;
}
