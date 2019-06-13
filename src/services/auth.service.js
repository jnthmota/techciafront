import axios from "axios";
import { notification } from '@/stores/notification.js';
const axiosInstance = axios.create({
  baseURL: "https://hunter-api.herokuapp.com/v1"
});

export const authApi = {
  login(body) {
    return axiosInstance.post('/auth/signin', body).catch(function (error) {
      if (error.response && error.response.data.statusCode == 401) {
        notification.error("Autentificação", "Usuário ou senha inválida");
      } else {
        console.log(error.response.data);
        notification.error("Autentificação", "Erro de comunicação com a api");
      }
    });
  },
  singUpCandidate(body) {
    return axiosInstance.post('/auth/signup/candidate', body).catch(function (error) {
      if (error.response && error.response.data.statusCode == 400) {
        notification.error("Cadastrar Candidato", error.response.data.message);
      } else {
        console.log(error.response.data);
        notification.error("Cadastrar Candidato", "Erro de comunicação com a api");
      }
    });
  }
};