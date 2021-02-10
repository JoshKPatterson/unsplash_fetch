// Import Libraries
import axios from "axios";

// Unsplash API
const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
  },
});

export default unsplash;
