import { axiosInstance } from "../_base/axiosInstance"

export async function detailedUser() {
  const response = await axiosInstance.get("/usuario");

  return response.data;
}
