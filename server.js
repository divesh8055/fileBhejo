const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

//static files add
app.use(express.static("public"));

//Middleware
app.use(express.json());

//Database connection
const connectDB = require("./config/db");
connectDB();

//Template Engines
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

//Routes
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show.js"));
app.use("/files/download", require("./routes/download.js"));

//Running Server
app.listen(PORT, () => {
    console.log("Listening on port:", PORT);
});
