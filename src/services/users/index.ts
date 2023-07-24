import { ENDPOINTS } from "../../constants/services";
import { axiosInstance } from "../../utils/axiosInstance";
import { TUser } from "./types";

const getCurrentUser = async (): Promise<TUser> => {
  const { data } = await axiosInstance({
    method: "GET",
    url: ENDPOINTS.currentUser,
  });

  return data;
};

export { getCurrentUser };