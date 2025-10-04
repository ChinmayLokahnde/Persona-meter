const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRoutes = require('./routes/studentRoutes')

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/students", studentRoutes);

app.listen(process.env.PORT, () =>
  console.log(` Server running on http://localhost:${process.env.PORT}`)
);


