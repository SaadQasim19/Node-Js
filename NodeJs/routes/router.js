//& will not use this file in this project..instead we will use the user_routes.js file. and controller one

import express from "express";
import User from "../models/User.js";

const router = express.Router();

// POST: Create user
router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "User created", user });
});

// GET: All users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// PUT: Update user
router.put("/:id", async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE: Delete user
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

export default router;
