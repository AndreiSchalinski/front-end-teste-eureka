import customAxios from "../utils/customAxios";

const axios = customAxios();

export const postUsuario = (usuario) => {
  return axios.post(`/usuario/salvar`, usuario);
};
