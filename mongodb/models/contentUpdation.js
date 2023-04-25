import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  location: {
    type: String,
    required: false,
  },
  number: {
    type: String,
    required: false,
  },
  caption: {
    type: String,
    required: false,
  },




});

const locationUpdation = mongoose.model("WebContent", locationSchema);



export default locationUpdation