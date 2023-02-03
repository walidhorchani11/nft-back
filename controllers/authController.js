const User = require("../models/userModel");

exports.signup = async (req, res, next) => {
  try {
    console.log("--------------------", req);
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    console.log("🚀 ~ file: authController.js:7 ~ signin ~ error", error);
  }
};
