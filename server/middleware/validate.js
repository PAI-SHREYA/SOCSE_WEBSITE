// calling zot defined in validation folder to validate the the contents of req.body against the schema.
const validate = (schema) => async(req,res,next)=>{
try {
    const parseBody= await schema.parseAsync(req.body);
    req.body=parseBody;
    next();
    
} 
catch (err) {
    const message=err.errors[0].message;
    // console.log(err.errors);
    // console.error(err);
    res.status(400).json({msg: message});
}
};

module.exports = validate;

