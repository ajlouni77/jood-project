const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const contactMessagesRoutes = require("./routes/contactMessagesRoutes");
const donorRoutes = require("./routes/donorRoutes");
const authRoutes = require("./routes/auth");
const beneficiaryRoutes = require("./routes/beneficiaryRoutes");

const cookieParser = require("cookie-parser");

const projectRoutes = require("./routes/projectRoutes");
const addprojectRoutes = require("./routes/addprojectRoutes");

const payment = require("./routes/paymentsRoutes");
const donationRoutes = require("./routes/donationRoutes");
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/projects", projectRoutes);
app.use("/api/donors", donationRoutes);
app.use("/api", adminRoutes);
app.use("/api", userRoutes);
app.use("/api", contactMessagesRoutes);
app.use("/api/donors", donorRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", payment);
app.use("/api", addprojectRoutes);
app.use("/api", beneficiaryRoutes);

// Start the server

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
