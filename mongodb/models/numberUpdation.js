import mongoose from "mongoose";

const numberSchema = new mongoose.Schema({
  number: {
    type: String,
    required: false,
  },



});

const numberUpdation = mongoose.model("numberContent", numberSchema);



export default numberUpdation