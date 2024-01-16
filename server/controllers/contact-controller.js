const contact = require("../models/contact-model");
const express = require("express");
const bodyParser= require("body-parser");
const app = express();
app.use(express.json());


const contactform = async(req,res) =>
{
    try {

        const response= req.body;
        await contact.create(response);

        return res.status(200).json({msg:"Message Successfully sent."});

        
    } catch (error) {

        console.log(error);
        return res.status(400).json({msg:"Message not sent."});

        
        
    }
};


module.exports= contactform;

