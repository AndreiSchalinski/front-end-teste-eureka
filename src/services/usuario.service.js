import customAxios from "../utils/customAxios";

const axios = customAxios();

export const postUsuario = (usuario) => {
  return axios.post(`/usuario/salvar`, usuario);
};

export const getListUsuarios = () => {
  return axios.get(`/usuario/carregar`);
};
