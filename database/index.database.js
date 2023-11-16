import mongoose, { mongo } from "mongoose";
import { mainConfig } from "../config/mainConffig.js";
import { MongoClient } from "mongodb";

// MongoClient.connect(mainConfig.dbUrl)
//   .then(() => console.log("Connected"))
//   .catch((err) => console.log(err));


mongoose
  .connect(process.env.MONGO_URI || mainConfig.dbUrl)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => console.log(err));

export default mongoose;

// export const connect = async () => {
//   try {
//       console.log("asdasdasd");
//   } catch (err) {
//     console.error(err);
//   }
// };
