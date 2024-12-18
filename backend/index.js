const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"))

// Routes
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

// Start the server
app.listen(5000, () => {
  console.log(`Server started on port: 5000`);
});
