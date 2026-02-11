const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

// Get Profile
router.get("/profile", authController.getProfile);

module.exports = router;
