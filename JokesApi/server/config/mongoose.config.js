const mongoose = require("mongoose")
const database = "Jokes"

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
        .then( () => console.log('Established connection to the database'))
        .catch( err => console.log('Something went wrong when connecting to the database', err))
