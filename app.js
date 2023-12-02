const express = require('express');
require('dotenv').config();
const connectDb = require('./db/connect');
const api_router = require('./routes/apiRoutes');
const cors = require('cors');



const app = express()
app.use(cors());
// var router = express.Router();
const PORT = process.env.PORT || 4000



app.get('/' , (req, res) => {
    res.send("hii live code")

})

// middleware 
app.use('/api/' , api_router);



// connect 
const start = async() => {
    try {
        await connectDb(process.env.MONGODB_URL);

        app.listen(PORT  , ()=>{
           console.log( `${PORT} is conn`)
        })
    } catch (error) {
            console.log(error)
    }
}
start()
