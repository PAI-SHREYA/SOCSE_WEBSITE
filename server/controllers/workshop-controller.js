const express = require("express");
const bodyParser= require("body-parser");
const app = express();
app.use(express.json());
const Workshop = require("../models/workshop-model");


const Addworkshop= async (req, res) => {
    try {
      const workshop = new Workshop(req.body);
      await workshop.save();
      res.status(201).json(workshop);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  const Searchworkshop= async (req, res) => {
    try {
      const { date } = req.query;
  
      if (!date) {
        return res.status(400).json({ error: 'Date parameter is required' });
      }
  
      // Assuming your date is stored as a string in the format 'YYYY-MM-DD'
      const workshops = await Workshop.find({ date: date });
  
      res.status(200).json(workshops);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


module.exports={Addworkshop,Searchworkshop};