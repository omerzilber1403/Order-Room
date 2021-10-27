require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(
    bodyParser.json({
        extended: true,
    })
);

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

app.use("/api/calendar", require("./Controllers/CalendarController"));

app.listen(5000, () => console.log("Started Server"));
