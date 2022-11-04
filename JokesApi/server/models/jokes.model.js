const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Please add a setup to your joke"],
        minLength: [ 10, "Setup must be at least 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Please a punchline to your joke"],
        minLength: [3, "Punchline must be at least 3 characters"]
    }
}, {timestamps: true})

const Joke = mongoose.model( "joke", JokeSchema );

module.exports = Joke;
