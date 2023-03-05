import { axiosInstance } from "../_base/axiosInstance"

export async function userLogout() {
  const response = await axiosInstance.post("/logout", {}, {});

  return response.data;
}
