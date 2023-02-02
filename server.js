const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/userModel");
console.log("🚀 ~ file: server.js:4 ~ User", User);

const app = express();

app.use("/", async (req, res, next) => {
  try {
    const userNew = await User.create({
      name: "WalidqaaAaa",
      email: "ssqwalidawawaqqqqq@gmail.fr  ",
      password: "dededeaaqqdeszded",
      role: "ADMIN",
    });
    console.log("🚀 ~ file: server.js:12 ~ userNew ~ userNew", userNew);

    res.end("hello");
  } catch (error) {
    console.log("🚀 ~ file: server.js:17 ~ app.use ~ error", error);
    res.end("error");
  }
});

(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/nft");
    console.log("success connextion to db");
  } catch (error) {
    console.error(error);
  }
})();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listen to port ${port}`));
