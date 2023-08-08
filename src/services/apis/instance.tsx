import axios from "axios";

const picsumInstance = axios.create({
  baseURL: "https://picsum.photos/",
});

export default picsumInstance;
