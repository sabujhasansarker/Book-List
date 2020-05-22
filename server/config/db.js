const config = require("config");
const mongoose = require("mongoose");

module.exports = connectDB = async () => {
  try {
    await mongoose.connect(config.get("db"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
