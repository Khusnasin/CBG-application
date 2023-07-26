
const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized. Please login first.' });
  }

  try {
    const decodedToken = jwt.verify(token, 'your_jwt_secret_key'); // Replace with your own secret key
    req.user = decodedToken; // Add user information to the request object
    next();
  } catch (error) {
    console.error('Error during token verification:', error);
    res.status(401).json({ message: 'Invalid token. Please login again.' });
  }
};

module.exports = authenticateUser;
