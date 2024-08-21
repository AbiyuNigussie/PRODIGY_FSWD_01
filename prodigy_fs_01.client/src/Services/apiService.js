import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7230",
  header: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (username, password) => {
  try {
    const response = await api.post("/api/auth/authentication", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export default api;