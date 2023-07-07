import axios from "axios";

const instancePost = axios.create({
    // baseURL: "http://localhost:5001",
    baseURL: "https://friendly-post-service.onrender.com",
});

export default instancePost;