const express = require("express");
const app = express();
const port = 8000;

// const mongoose = require("mongoose");'
require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({extended: true }));

const JokeRoutes = require("./routes/jokes.routes");
JokeRoutes(app);

app.listen(port, () => console.log(`Hey your sever is running on this  port ${port}`))
