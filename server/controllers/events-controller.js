const moment=require("moment");
const Event = require("../models/event-model");
const express = require("express");
// const bodyParser= require("body-parser");
const app = express();
app.use(express.json());
// const Event = require("../models/event-model");


const addEvent= async (req,res)=>{
  try {
      const response = req.body;
      await Event.create(response);
      res.json({ status: "ok", data: response  });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }

};



// Endpoint to get magazine data
const getEvent= async (req,res)=>{
  try {
    const event = await Event.find({});
    res.json({ status: "ok", data: event });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};


const upcomingEvent= async (req, res) => {
  try {
    const today = moment();
    const events = await Event.find();
    const upcomingEvents = events.filter(event => {
    const eventDate = moment(event.eventDate, 'DD-MM-YYYY');
    return eventDate.isAfter(today, 'day');
    });

    res.json(upcomingEvents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const pastEvent= async (req, res) => {
  try {
    // Fetch past events with date earlier than today's date
    const today = moment();
    const events = await Event.find();
    const pastEvents = events.filter(event => {
      const eventDate = moment(event.eventDate, 'DD-MM-YYYY');
      return eventDate.isBefore(today, 'day');
    });

    res.json(pastEvents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports ={addEvent,getEvent,upcomingEvent, pastEvent};