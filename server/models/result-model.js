const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    eventName: String,
    resultLink: String,
  });


  const Result = mongoose.model('Programclubresult', resultSchema);

  module.exports = Result;
  