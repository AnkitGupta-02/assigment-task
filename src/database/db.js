require("dotenv").config();
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

main().then(()=>console.log("connection Sucessfull")).catch((err)=>console.log(err));

module.exports = main;