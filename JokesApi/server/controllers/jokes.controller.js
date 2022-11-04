const Joke = require("../models/jokes.model")

module.exports = {
    showAllJokes(req,res){
        Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
    },
    showOneJoke(req,res){
        console.log('Heres your joke')
        Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke}))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
    },
    randomJoke(req,res){
        console.log("getRandom method executed");
        Joke.count().exec((err, count) => {
        var random = Math.floor(Math.random() * count)
        Joke.findOne().skip(random).exec((err, result) => {
            if(err){
                return res.json(err)
            }
            return res.json(result);
        })
    })
    },
    createJoke(req,res) {
        Joke.create(req.body)
        .then( newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
    },
    updateJoke(req,res){
        Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then( updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
    },
    deleteJoke (req,res){
        Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
    }
}
