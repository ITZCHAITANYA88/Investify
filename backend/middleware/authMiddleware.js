const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  // 🔐 No token? Reject the request
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token" });
  }

  try {
    // ✅ Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // ✅ Attach user ID to request object
    req.userId = decoded.id;

    next(); // ✅ Allow request to continue
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};

module.exports = authMiddleware;
