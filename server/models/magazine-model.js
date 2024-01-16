const mongoose = require("mongoose");

const MagazineSchema = new mongoose.Schema(
  {
   image:String,
   title:String,
   year:Number,
   pdf:String,
  },
  
);

const Magazine =new mongoose.model("magazine",MagazineSchema);

module.exports =  Magazine;