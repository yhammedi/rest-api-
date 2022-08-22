const express = require("express");
//Import Database from config
const connectDB = require("./config/Database");
const app = express();
const router = express.Router();
const User = require("./Models/User");
//Connect database to server
connectDB();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.get("/test", (req, res) => res.send("This is For test"));
//Import Router Api
const Router = require("./routes/user_api.js");
app.use("/api/", Router);

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
