import axios from "axios";

const requester = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default requester;
