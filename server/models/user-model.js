const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { use } = require("../router/auth-router");
const userSchema = new mongoose.Schema({
    username:
    {
        type : String,
        require : true,
    },
    email:
    {
        type: String,
        require: true, 
    },
    password:
    {
        type: String,
        require : true,
    },
    isAdmin:
    {
        type: Boolean,
        default: false,
    }
});

// securing password using bcrypt
// userSchema.pre('save',async function(){
//     const user = this;
//     // console.log("pre method",this);
//     if(!user.isModified("password"))
//     {
//         next();
//     }
//     try{
//         const saltRound=await bcrypt.genSalt(10);
//         const hash_pwd= await bcrypt.hash(user.password,saltRound);
//         user.password=hash_pwd;

//     }
//     catch(error)
//     {
//         next(error);
//     }
// }
// );


// jwt used to aunthenticate and authorize used mostly in the front end and not shared with the server.

userSchema.methods.generateToken = function() {
try
{
    return jwt.sign({
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
    },
    process.env.JWT_SECRET,{
        expiresIn: "30d",
    }
    );
}
catch(error)
{
    console.error(error);
}
};


userSchema.methods.compare = async function(password){
    try {
        return (bcrypt.compare(password,this.password));
        
    } catch (error) {
        
    }
};


// defining model or collection name
const User = new mongoose.model("User",userSchema);

module.exports = User;