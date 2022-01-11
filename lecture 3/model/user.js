const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 55
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  age: {
    type: Number,
    required: true
  },
  isAdmin: Boolean,
});

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(12).required(),
  age: Joi.number().required(),
  isAdmin: Joi.boolean().required(),
})

const User = mongoose.model("user", userSchema);

const validateUser = (requestBody) => {
  return joiSchema.validate(requestBody)
}

module.exports = { User, validateUser };
