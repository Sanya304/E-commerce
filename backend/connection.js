require("dotenv").config();
const mongoose = require("mongoose");
const connectionStr =
  "mongodb+srv://username:1password1@cluster0.r5muyu8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(connectionStr, { useNewUrlParser: true })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));
mongoose.connection.on("error", (err) => {
  console.log(err);
});
