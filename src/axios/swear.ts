import axios from "axios";

export const swearApi = axios.create({
  baseURL: 'https://www.foaas.com/'
})