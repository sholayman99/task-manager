const express = require("express");
const app = new express();

//importing router
const router = require("./src/routes/api");

//importing mongoose
const mongoose = require("mongoose");

//importing security middlewares
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const cookieParser = require("cookie-parser");
const { rateLimit } = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 1000,
    standardHeaders: "draft-7",
    legacyHeaders: false,

});

//implementation of security middlewares.

app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}));
app.use(hpp());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(limiter);
app.use(express.json());
app.use(cookieParser());

//implementation of routes
app.use("/api/v1", router);


//implementation if undefined route
app.use("*", (req, res) => {
    res.status(404).json({status:"404 Not Found" , message:"No Url Available"});
});

//MongoDB database connection
async function connectToMongoDB() {
    try {
        const uri = "mongodb://0.0.0.0:27017/task-manager";
        const OPTIONS = { user: "", pass: "" };
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");

        // Perform database operations here
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

// Call the async function to connect to MongoDB
connectToMongoDB();

module.exports = app;