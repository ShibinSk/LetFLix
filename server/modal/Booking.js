import mongoose, { Schema, model } from "mongoose";

const BookingSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    theater: {
      type: String,
      required: true,
      enum: ["romantic", "standard"],
    },
    date: {
      type: Date,
      required: true,
    },
    slot: {
      type: Number,
      required: true,
    },
    numberOfPeople: {
      type: Number,
      required: true,
    },
    decoration: {
      type: Boolean,
      required: true,
    },
    transactionID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = model("bookings", BookingSchema);
