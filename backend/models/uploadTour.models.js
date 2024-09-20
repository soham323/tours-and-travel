import mongoose from 'mongoose';

const uploadTourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    days: {
      type: Number,
      require: true,
    },
    nights: {
      type: Number,
      require: true,
    },
    countries: {
      type: [String],
      require: true,
    },
    cities: {
      type: [String],
      require: true,
    },
    tourImage: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

export const Tour = mongoose.model("Tour", uploadTourSchema);
