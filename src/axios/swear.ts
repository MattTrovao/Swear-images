import axios from "axios";

export const foaas = axios.create({
  baseURL: 'https://www.foaas.com/'
})

export const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/'
})