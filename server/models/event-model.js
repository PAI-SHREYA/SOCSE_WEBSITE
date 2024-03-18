const mongoose =require("mongoose");
const eventSchema = new mongoose.Schema({
    eventName: String,
    eventDate: String,
    eventLink: String,
    description: String, // New field for event description
  });
  
  const Event = mongoose.model('Event', eventSchema);

  module.exports= Event;