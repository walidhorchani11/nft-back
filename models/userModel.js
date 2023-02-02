const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: [true, "name is required"],
    minLength: [3, "name is too short"],
  },
  email: {
    type: "String",
    required: [true, "email is required"],
    // trim fonctionne sur les bords
    trim: true,
    unique: [true, "email was used"],
    minLength: [6, "email is too short"],
    // lowercase not lowerCase
    lowercase: true,
    validate: [validator.isEmail, "email not valid!"],
  },
  password: {
    type: "String",
    required: [true, "password required"],
    minLength: [8, "password too short"],
    // not show password dans les queries
    select: false,
  },
  confirmPassword: {
    type: "String",
  },
  role: {
    type: "String",
    enum: {
      values: ["ADMIN", "MODERATOR", "USER"],
      // Mongoose replaces {VALUE} with the value being validated.
      message: `{VALUE} is not a valid role`,
    },
    default: "USER",
  },
  photo: {
    type: "String",
    // default: 'mettre image par default'
  },
});

//compiling schema to model
const User = new mongoose.model("User", userSchema);

module.exports = User;

// lien utile: https://mongoosejs.com/docs/schematypes.html#string-validators
