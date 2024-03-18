const Magazine = require("../models/magazine-model");
const express = require("express");
const bodyParser= require("body-parser");
const app = express();
app.use(express.json());

 const addMagazine= async (req,res)=>{
    try {
        const { title, year, imageUrl, pdfUrl } = req.body;
        const magazine = new Magazine({
          title,
          year,
          image: imageUrl,
          pdf: pdfUrl
        });
        await magazine.save();
        res.json({ status: "ok", data: magazine });
      } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
      }

};


  
  // Endpoint to get magazine data
const getMagazine= async (req,res)=>{
    try {
      const magazines = await Magazine.find({});
      res.json({ status: "ok", data: magazines });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  };

module.exports ={addMagazine,getMagazine};


