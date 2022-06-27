import axios from "axios"

const api = axios.create({
    baseURL: "https://api.weatherapi.com/v1/current.json?key=33c56a8569484368825134112222706&q="
});

export default api;