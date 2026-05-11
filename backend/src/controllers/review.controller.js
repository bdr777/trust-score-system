const Review = require("../models/review.model");

exports.createReview = async (req, res) => {
  try {

    const { content } = req.body;

    // fake review logic
    const fakeWords = ["fake","bad", "scam", "spam","fraud","counterfeit","phony","deceptive","misleading","bogus","sham"];

    const isFake = fakeWords.some((word) =>
      content.toLowerCase().includes(word)
    );

    const review = await Review.create({
      content,
      isFake,
      user: req.user.id
    });

    res.status(201).json({
      message: "Review created",
      review
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.getReviews = async (req, res) => {
  try {

    const reviews = await Review.find()
      .populate("user", "name email");

    res.status(200).json(reviews);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.getUserReviews = async (req, res) => {
  try {

    const reviews = await Review.find({
      user: req.user.id
    }).populate("user", "name email");

    res.status(200).json(reviews);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


exports.deleteReview = async (req, res) => {
  try {

    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        message: "Review not found"
      });
    }

    // check ownership
    if (review.user.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Access denied"
      });
    }

    await Review.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Review deleted"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};