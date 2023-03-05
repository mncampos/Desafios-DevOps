import { axiosInstance } from "../_base/axiosInstance";

export async function postReaction(id, reaction) {
  const response = await axiosInstance.put(
    `/postagens/${reaction}/${id}`
  );
  return response.data;
}
