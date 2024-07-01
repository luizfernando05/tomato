import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  const user = process.env.MONGO_USER;
  const password = process.env.MONGO_PASSWORD;
  const dbName = process.env.MONGO_DB_NAME;

  const uri = `mongodb+srv://${user}:${password}@cluster0.rsonvf8.mongodb.net/${dbName}`;

  await mongoose
    .connect(uri)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.error("DB connection error:", err));
};

export default connectDB;
