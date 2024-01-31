import axios from "axios";

const request = axios.create({
  baseURL: process.env.VUE_APP_MAIN_ROUTE,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

export default request;
