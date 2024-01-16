const Domain = require("../models/domain-model");
const express = require("express");
const bodyParser= require("body-parser");
const app = express();
app.use(express.json());


const viewDomain = async(req,res)=>{
    
        Domain.find()
        .then(domainsclubs => res.json(domainsclubs))
        .catch(err => res.status(400).json('Error:'+err));
        
   

};
const addDomain = async(req,res)=>{
    try {
        // console.log("in addDomain");
    const response=req.body;
    // const title = req.body.title;
    // const description = req.body.description;
    // const image = req.body.image;
    // const type = req.body.type;
    // const path = req.body.path;

    // const newDomainsClubs = new Domain({
    //     title,
    //     description,
    //     image,
    //     type,
    //     path,
    // });
    // const DomainCreated = await newDomainsClubs.create({ title,
    //     description,
    //     image,
    //     type,
    //     path});
    await Domain.create(response)
        // console.log()
        res.status(200).json({message:"Domain Added"});
    // newDomainsClubs.save()
        // .then(()=>res.json('Domain/Club added!'))
        // .catch(err => res.status(400).json('Error:'+err))

        
    } catch (error) {
        console.log(error,"add domain");
        
    }
};

module.exports = {addDomain,viewDomain};
