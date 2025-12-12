
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require('./Connectdb');
const User = require("./UserSchema1");

connectDB();

// MIDDLEWARES
app.use(cors());            // Allow frontend to access backend
app.use(express.json());    // Enable JSON body parsing

// POST ROUTE
app.post("/add-user", async (req, res) => {
    try {
        const { name, email,number, usn,
            department,
            yearOfStudy,
            semester,
            dob  } = req.body;

        const newUser = new User({
            name,
            email,
            number,
            usn,
            department,
            yearOfStudy,
            semester,
            dob 
        });

        await newUser.save();
        res.json({ message: "User registered successfully!" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error registering user" });
    }
});


app.get("/get-users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching users" });
    }
});


// SERVER
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});


