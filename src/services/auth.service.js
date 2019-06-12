import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://hunter-api.herokuapp.com/v1"
});

export const authApi = {
  login(body) {
    return axiosInstance.post('/auth/signin', body);
  },
  singUpCandidate(body) {
    return axiosInstance.post(body);
  }
};