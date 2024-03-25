const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    default: "no-username",
  },
  email: {
    type: String,
    require: true,
    unique: true,
    default: "no-email",
  },
  password: {
    type: String,
    require: true,
    default: "no-password",
  },
  firstName: String,
  lastName: String,
  age: Number,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
