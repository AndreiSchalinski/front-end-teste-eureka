import axios from "axios";

const customAxios = () => {
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      Authorization: `${token.tokenType} ${token.accessToken}`,
      "Content-Type": "application/json",
    },
    responseType: "json",
  });

  return axiosInstance;
};

export default customAxios;
