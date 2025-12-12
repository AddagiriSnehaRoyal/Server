const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://Sneha:Sneha13@cluster0.0lfpoev.mongodb.net/test12");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(error){
        console.log("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;