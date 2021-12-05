import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=2SYRwhd5J0Of3tgswynmRJaUrk6XHLgGgNHXvMPy&query=burger",
  headers: {
    "Accept" : "application/json",
    "Content-Type" : "application/json"
  },
});

export default instance;