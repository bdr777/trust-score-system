const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {

    // get token from cookies
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    // verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // store user info in request
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid token"
    });
  }
};

module.exports = authMiddleware;