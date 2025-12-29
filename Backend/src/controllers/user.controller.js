import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const result = await User.create({ username, email, password });
    if (!result)
      return res.send({ success: false, message: "User not created" });
    res.send({ success: true, message: "User created successfully" });
  } catch (error) {
    return res.send({
      success: false,
      message: "Error",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) res.send({ success: false, message: "User not found" });
    const verify = await user.comparePassword(password);
    if (!verify)
      return res.send({ success: false, message: "Invalid password" });
    
    const userdetails = await User.findOne({email},{password:0})
    res.send({ success: true, message: "Login successful", user: userdetails });
  } catch (error) {
    return res.send({
      success: false,
      message: "Error",
      error: error.message,
    });
  }
};
