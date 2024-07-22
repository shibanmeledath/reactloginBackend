
const mongoose = require('mongoose');

const connectDB=async()=>{
try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log('Connected to database')
    
} catch (error) {
    console.log("Not connected");
}

}
module.exports= connectDB;