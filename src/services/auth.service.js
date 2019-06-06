import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://hunter-api.herokuapp.com/v1"
});

export const authApi = {
  login(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  singUpCandidate(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  }
};