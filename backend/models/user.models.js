import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password Required'],
      min: [6, 'Password atleast have 6 characters.'],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);