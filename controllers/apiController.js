


const Api = require("../models/apiModels")
const getAllApi = async(req, res) => {

    const {name} = req.query

    let dta = {}

    if(name){
            // queryObject.name = name;
            dta.name = { $regex: name , $options: "i"};
        }

    try {
        
        dta = await Api.find(dta)
        // console.log(dta)
        res.status(200).json({dta , len:dta.length,  msg:"this is "})
    } catch (error) {
            console.log(error)
    }
}

module.exports = { getAllApi}