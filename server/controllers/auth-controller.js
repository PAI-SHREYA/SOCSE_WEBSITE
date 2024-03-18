const express = require("express");
const bodyParser = require('body-parser');
const mongoose=require("mongoose");
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
const getuser= async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


  const DeleteUser= async (req, res) => {
    const userId = req.query._id;

    if (!mongoose.isValidObjectId(userId)) {
        return res.status(400).send('Invalid user ID');
    }

    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).send('User not found');
        }

        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).send('Server error');
    }
};

const MakeAdmin= async (req, res) => {
    const userId = req.query._id;

    if (!mongoose.isValidObjectId(userId)) {
        return res.status(400).send('Invalid user ID');
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { isAdmin: true }, { new: true });

        if (!updatedUser) {
            return res.status(404).send('User not found');
        }

        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

module.exports = {home, login, register,getuser,DeleteUser,MakeAdmin};

