const express =require("express");
const router = express.Router();
// const {home, login} = require("../controllers/auth-controller");
const authcontroller = require("../controllers/auth-controller");
const signupSchema = require ("../validation/auth-validation");
// const loginSchema = require("../validation/auth-validation");
// const authMiddleware = require("../middleware/authmiddleware");
const validate = require("../middleware/validate");
// const validatelogin = require("../middleware/validatelogin");


// router.route("/").get((req, res)=>{
//         res.status(200).send("welcome to home using router")
//     });
// using controller
router.route("/").get(authcontroller.home);
// router.route("/login").get((req, res)=>{
//     res.status(200).send("welcome to login ")
// });
router.route("/login").post(authcontroller.login);
router.route("/register").post(validate(signupSchema) ,authcontroller.register);
// router.route("/user").get(authMiddleware,authcontroller.user);



module.exports= router;