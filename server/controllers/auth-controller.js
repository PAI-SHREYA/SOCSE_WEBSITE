const express = require("express");
const bodyParser = require('body-parser')
// const jsonParser = bodyParser.json()


const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const User = require("../models/user-model");
const bcrypt = require("bcryptjs");


const home = async ( req , res)=>
{
try{
    res.status(200).send("welcome to home using router");
}
catch(error) {
    console.log(error);
// res.status(500).json({message : error.toString()});
}
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        
        

 if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password,userExist.password);

        // const isPasswordValid = userExist.comparepassword(password);

        if (isPasswordValid) {
            return res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
                isAdmin: userExist.isAdmin

            });
            setRole
        } else {
            return res.status(401).json({
                msg: "Invalid email or password"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.toString() });
    }
};


const register = async (req, res) =>
{
    try{
      
        const {username,email, password} = req.body;
        const userExist = await User.findOne({email: email});
        if(userExist)
        {
            res.status(400).json({msg : "user already exists"});
            return
        }
        const saltRound = 10;
        const hash_pwd = await bcrypt.hash(password, saltRound);
        // console.log(req.body);
        const userCreated = await User.create({username, email, password:hash_pwd});
        res.status(200).json({msg : "Registration successful!" , token: await userCreated.generateToken() , userId: userCreated._id.toString() });
        // const {data} =req.body;
        // check if email exists
        // res.status(200).json({data})
        // res.status(200).send("welcome to register");
    }
    catch(error)
    {
        // console.log(error);
        next(error);
        // the above calls function in error middleware.js present in middleware folder.
        // return res.status(400).json({message: error.toString()});

    }

};


// to send user data
const user = async (req,res) =>
{
  try {
const userData=req.user;
console.log(userData);
return res.status(200).json({message: userData});
    
  } catch (error) {
    console.log(`error from user route ${error}`);
    
  }

};

module.exports = {home, login, register,user};

