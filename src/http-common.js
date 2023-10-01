import axios from "axios";

export default axios.create({
  baseURL: "https://node-free-express-sequelize.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});