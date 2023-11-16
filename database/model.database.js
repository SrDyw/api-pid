import mongoose from "./index.database.js";
import { userSchema } from "./schemas.database.js";


export const userModel = mongoose.model("users", userSchema);


// model.find().then((data) => console.log(data));