const pool = require('./config');
const bcrypt = require('bcryptjs');

// Registration endpoint
const registeredUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email is already registered
    const checkQuery = 'SELECT * FROM users WHERE email = $1';
    const checkValues = [email];
    const checkResult = await pool.query(checkQuery, checkValues);

    if (checkResult.rows.length > 0) {
      // Email is already registered
      return res.status(409).json({ message: 'Email already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store the user in the database
    const insertQuery = 'INSERT INTO users (email, password) VALUES ($1, $2)';
    const insertValues = [email, hashedPassword];
    await pool.query(insertQuery, insertValues);

    // Registration successful
    return res.json({ message: 'Registration successful' });
  } catch (error) {
    // Handle any error that occurred during the registration process
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  registeredUser,
};
