import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-d038.up.railway.app/api/products"
});

export default API;
