import express from "express";
import User from "../models/User.js";
const router = express.Router();

// Add user
router.post("/add", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;
