const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: {type:String, required:true},
  codes: [
    {
      language: { type: String, required: true },
      code: { type: String, required: true },
      input: { type: String },
      output: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  previousLanguage: { type: String, default: null },
  previousTemplate: { type: String, default: null },
});

module.exports = mongoose.model("User", userSchema);
