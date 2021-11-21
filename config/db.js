require("dotenv").config();
const mongoose = require("mongoose");

//Data base connection
function connectDB() {
  mongoose
    .connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected 🥳");
    })
    .catch((err) => {
      console.log("Failed ☹️", err);
    });

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("Successfully connected to database 🥳");
  });
  connection.on("error", (err) => {
    console.log("Error occured ☹️", err);
  });
}

module.exports = connectDB;
