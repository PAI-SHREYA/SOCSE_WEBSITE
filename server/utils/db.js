require("dotenv").config();
const mongoose = require("mongoose");


const URI = process.env.MONGODB_URI;
// const URI = "mongodb://localhost:27017";
mongoose.connect(URI,{useNewUrlParser:true});
const connectDB = async () =>
{
    try{
            await mongoose.connect(URI);
            console.log("connected");
    }
    catch(error)
    {
        console.log("database connection failed.");
        process.exit(0);
    }
}


module.exports = connectDB;