import User from '../models/usermodel.js';
import bcryptjs from 'bcrypt';
import { errorHandeler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res,next) => {
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
    next(err);
  }
};

export const signin = async (req, res,next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if(!validUser){
      return next(errorHandeler("Invalid email or password", 401));
    }
    const validPassword = await bcryptjs.compare(password, validUser.password);
    if(!validPassword){
      return next(errorHandeler("Invalid email or password", 401));
    }
    const token = jwt.sign({ email: validUser.email, id: validUser._id }, process.env.JWT_SECRET);
    const {password:pass,...rest} = validUser._doc;
    res.cookie("access_token", token, { httpOnly: true }).status(200).json({ success: true, message: "User logged in successfully" ,rest});
  }catch (err) {
    next(err);
  }
}