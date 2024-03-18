const Result = require("../models/result-model");
const express = require("express");
const bodyParser= require("body-parser");
const app = express();
app.use(express.json());

const Addresult= async (req, res) => {
    try {
      const { eventName, resultLink } = req.body;
      const result = new Result({ eventName, resultLink });
      await result.save();
      res.json({ message: 'Result added successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

 const Getresult= async (req, res) => {
    try {
      const resultsWithDetails = await Result.aggregate([
        {
          $lookup: {
            from: 'events',
            localField: 'eventName',
            foreignField: 'eventName',
            as: 'eventDetails'
          }
        },
        {
          $project: {
            _id: 1,
            eventName: 1,
            resultLink: 1,
            eventDetails: {
              $arrayElemAt: ['$eventDetails', 0]
            }
          }
        }
      ]);
  
      res.json(resultsWithDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



  module.exports={Addresult, Getresult};
  