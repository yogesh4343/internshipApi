const mongoose = require('mongoose');

const uri = "MONGODB_URL = mongodb+srv://Yogesh:9891334343@cluster0.riv5xwy.mongodb.net/API?retryWrites=true&w=majority"


const connectDb  = (uri)=> {
// const connectDb  = ()=> {
    // console.log("connect bd")
    return mongoose.connect(uri , {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    });


}


module.exports = connectDb;