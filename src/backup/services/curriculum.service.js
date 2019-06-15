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

export const curriculumApi = {
    put(body) {
        return axiosInstance.put('/curriculums', body);
    }
};