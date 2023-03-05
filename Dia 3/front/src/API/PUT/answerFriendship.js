import { axiosInstance } from "../_base/axiosInstance";

export async function answerFriendship(id, resposta) {
  const response = await axiosInstance.put(
    `/usuario/amizades/${id}/${resposta}`
  );
  return response.data;
}
