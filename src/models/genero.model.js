import mongoose from "mongoose";

const generoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    horasMinimas: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Genero = mongoose.model("Genero", generoSchema);