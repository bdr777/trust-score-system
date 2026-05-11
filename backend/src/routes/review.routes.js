const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
  createReview,
  getReviews,
  getUserReviews,
  deleteReview
} = require("../controllers/review.controller");

router.post("/", authMiddleware, createReview);

router.get("/", getReviews);
router.get("/user", authMiddleware, getUserReviews);
router.delete("/:id", authMiddleware, deleteReview);

module.exports = router;