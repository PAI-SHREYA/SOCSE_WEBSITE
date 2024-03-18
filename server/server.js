const express = require("express");
const app= express();
const cors = require("cors");
const authRouter = require('./router/auth-router');
const ContactRouter = require('./router/contact-router');
const DomainRouter=require('./router/domain-router');
const MagazineRouter=require('./router/magazine-router');
const EventRouter=require('./router/event-router');
const WorkRouter=require('./router/work-router');

const connectDB = require('./utils/db');
const errormiddleware = require("./middleware/error-middleware");

const corsOptions= {
    origin:"http://localhost:5173",
    method: "GET, POST, DELETE, PUT, PATCH, HEAD ",
    // method:"GET",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());


app.use("/api/auth", authRouter);
app.use("/api/form", ContactRouter);
app.use("/api/domain",DomainRouter);
app.use("/api/magazine",MagazineRouter);
app.use("/api/programclub",EventRouter);
app.use("/api/workshop",WorkRouter);

app.use(errormiddleware);


connectDB().then(()=>{
    const PORT=3000;
    app.listen(PORT, ()=>{
    console.log(`server is running at port : ${PORT}`);
    } );
});
// for homepage  
// app.get("/",(req, res)=>{
//         res.status(200).send("welcome to home ")
// });

// app.get("/login",(req, res)=>{
//     res.status(200).send("welcome to login ")
// });

