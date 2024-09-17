import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      lowercase: true,
    },
    comment: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Inquiry = mongoose.model("Inquiry", inquirySchema);