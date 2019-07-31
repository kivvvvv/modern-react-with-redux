import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c23cb4e244e44bacfbbdc03d6f2a714bb8a25b3d2fbf591b83affcc31bc0dbed"
  }
});
