import { Axios } from "axios";

const axios = new Axios({
  baseURL: "",
  headers: {
    Accept: "application/json",
  },
});

export default axios;
