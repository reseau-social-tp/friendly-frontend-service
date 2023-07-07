import axios from "axios";

const instanceAuth = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://social-network-auth-service.onrender.com",
});

export default instanceAuth;