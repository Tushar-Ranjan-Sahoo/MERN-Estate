import User from '../models/usermodel.js';
import bcryptjs from 'bcrypt';

export const signup = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    // Hash password asynchronously
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create new user
    const newUser = new User({ userName, email, password: hashedPassword });

    // Save user and send response
    await newUser.save();
    res.status(201).json({ success: true, message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "An error occurred while creating the user" });
  }
};
