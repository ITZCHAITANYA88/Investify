require('dotenv').config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

const app = express();


const allowedOrigins = [
  "http://localhost:3000", 
  "http://localhost:5173", 
  "http://localhost:5174", 
  "https://investify-1.onrender.com", 
];


app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn("❌ Blocked CORS request from:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());


const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);


app.post("/api/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order Saved");
  } catch (error) {
    console.error("❌ Error saving order:", error);
    res.status(500).send("Error saving order");
  }
});

app.get("/api/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({}).sort({ createdAt: -1 });
    res.json(allOrders);
  } catch (err) {
    console.error("❌ Error fetching orders:", err);
    res.status(500).send("Internal server error");
  }
});


app.get("/api/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("❌ Error fetching holdings:", err);
    res.status(500).send("Internal server error");
  }
});

app.get("/api/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error("❌ Error fetching positions:", err);
    res.status(500).send("Internal server error");
  }
});


app.get("/api/test-cookie", (req, res) => {
  console.log("Cookies:", req.cookies);
  res.json(req.cookies);
});


mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
