const mongoose = require("mongoose");
const URL = process.env.MONGO_URl;
const mongodb = async () => {
  try {
    const conn = await mongoose.connect(URL, {});
  } catch (error) {
    console.log(`Error in mongodb connection ${error}`);
  }
};
module.exports = mongodb;
