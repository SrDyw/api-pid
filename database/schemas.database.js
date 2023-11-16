import mongoose from "./index.database.js";

export const userSchema = new mongoose.Schema({
  id:{
    type:Number,
    required:true,
    unique:true
  },
  username: String,
  activeTime:Number,
  role:String,
  skill:Array
});
