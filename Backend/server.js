const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path"); // ✅ Required for serving static files
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve static frontend files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "../frontend/landing page")));

// ✅ Routes
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

// ✅ Serve frontend index.html for the base route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/landing page/index.html"));
});

// ✅ Catch-all route (for undefined routes)
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
