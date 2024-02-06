import mongoose from "mongoose";
const conntectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URl);
    console.log(`Connected to mongodb ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in mongodb connection ${error}`);
  }
};
export default conntectDb;
