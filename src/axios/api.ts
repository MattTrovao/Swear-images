import axios from "axios";

export const foaas = axios.create({
  baseURL: 'https://www.foaas.com/'
})

export const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Authorization': "Client-ID w54lJLYDuDdTjfnF_uSctldTILwRS8SQZOngIeizyhY" // Example header with authorization token
  }
});