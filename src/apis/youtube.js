import axios from "axios";

const KEY = "AIzaSyDjUhcWd_1L_x_o1HI4AzCtNZ1n71TjuNM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
