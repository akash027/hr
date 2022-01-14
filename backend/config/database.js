const mongoose = require('mongoose');

//Database Connection

const connectDatabase = () => {
    mongoose.connect("mongodb+srv://totalhr2021:usLjJYhhgOCk5iWt@cluster0.8uj9i.mongodb.net/easyhr?retryWrites=true&w=majority", {

        //For avoid Warnings
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDb Database connect with HOST : ${con.connection.host}`)
    })
}

module.exports = connectDatabase

