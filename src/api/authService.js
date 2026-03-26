import { apiClient } from "./apiClient";

export const loginUser = async (email, password) => {
  return apiClient("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password
    })
  });
};