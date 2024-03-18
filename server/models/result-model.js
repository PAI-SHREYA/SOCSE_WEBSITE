const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    eventName: String,
    resultLink: String,
  });


  const Result = mongoose.model('Result', resultSchema);

  module.exports = Result;
  