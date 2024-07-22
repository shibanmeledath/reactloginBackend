// Import necessary modules
const jwt = require('jsonwebtoken');

// Secret key for signing the token (keep this secure!)
const secretKey = process.env.SECRET_KEY; // Replace with your actual secret key

/** 
 * Generates a JSON Web Token (JWT) for user authentication.
 * @param {string} userId - The user's unique identifier (e.g., database ID).
 * @returns {string|null} - The JWT token or null if an error occurs.
 */
const generateToken = (userId) => {
  // Create a payload with user-specific data
  const payload = {
    user: {
      id: userId, // Include any other relevant user data here
    },
  };

  try {
    // Sign the token with the payload and secret key
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

    return token;
  } catch (err) {
    console.error('Error generating token:', err.message);
    return null; // Handle the error appropriately in your application
  }
};

module.exports = generateToken;
