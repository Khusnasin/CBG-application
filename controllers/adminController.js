const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require("./db");
const AdminModel = require("../models/user");

// Controller function for admin registration
const registerAdmin = async (req, res) => {
  const { name, email, password, adminCode } = req.body;

  // Validate the admin code 
  if (adminCode !== 'your-secret-admin-code') {
    return res.status(401).json({ message: 'Invalid admin code' });
  }

  try {
    // Check if the admin already exists
    const existingAdmin = await AdminModel.findOne({ email });
    if (existingAdmin) {
      return res.status(409).json({ message: 'Admin already exists' });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin object
    const newAdmin = new AdminModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new admin to the database
    await newAdmin.save();

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    console.error('Error during admin registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function for admin login
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the admin by email
    const admin = await AdminModel.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the entered password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(password, admin.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token for the logged-in admin
    const token = jwt.sign({ id: admin._id }, config.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, isAdmin: true, message: 'Admin logged in successfully' });
  } catch (error) {
    console.error('Error during admin login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { registerAdmin, loginAdmin };
