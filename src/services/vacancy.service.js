import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://hunter-api.herokuapp.com/v1"
});

axiosInstance.interceptors.request.use(
    function (config) {
        const token = window.localStorage.token
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

export const vacancyApi = {
    post(endpoint, body) {
        return axiosInstance.post(endpoint, body);
    },
    put(endpoint, body) {
        return axiosInstance.put(endpoint, body);
    },
    get(endpoint, body) {
        return axiosInstance.get(endpoint, body);
    },
    getID(endpoint, body) {
        return axiosInstance.get(endpoint, body);
    },
    getCandidate(endpoint, body) {
        return axiosInstance.get(endpoint, body);
    },
    associateCandidate(endpoint, body) {
        return axiosInstance.post(endpoint, body);
    },

};