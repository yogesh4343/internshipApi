require("dotenv").config();
const connectDB = require("./db/connect");
 const  Product = require('./models/apiModels');
 const ProductJson = require("./products.json")
//  console.log(`ProductJson` , ProductJson)


 const start= async() =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        // await Product.deleteMany()
        await Product.create(ProductJson);
        console.log("success");
    }catch(error){
        console.log(error)
    }
        
    
 }

 start()