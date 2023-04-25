import mongoose from "mongoose";

const captionSchema = new mongoose.Schema({
    caption: {
    type: String,
    required: false,
  },



});

const captionUpdation = mongoose.model("captionContent", captionSchema);



export default captionUpdation