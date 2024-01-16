const {z} = require ("zod");


// schema
const signupSchema = z.object({
    username: z
    .string({required_error: "Username is required."})
    .trim()
    .min(3,{message:"Username must be atleast 3 characters long."})
    .max(15,{message:"Username must not be more than 15 characters long."}),

    email: z
    .string({required_error: "Email is required."})
    .trim()
    .email({message:"Invalid Email"}),
    

    password: z
    .string({required_error: "Password is required."})
    .trim()
    .min(3,{message:"Password must be atleast 3 characters long."})
    .max(15,{message:"Password must not be more than 15 characters long."})
});

// const loginSchema = z.object({

//     email: z
//     .string({required_error: "Email is required."})
//     .trim()
//     .email({message:"Invalid Email"}),
    

//     password: z
//     .string({required_error: "Password is required."})
//     .trim()
//     .min(3,{message:"Password must be atleast 3 characters long."})
//     .max(15,{message:"Password must not be more than 15 characters long."})
// });

module.exports = signupSchema;