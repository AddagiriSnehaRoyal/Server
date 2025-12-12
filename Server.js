
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

app.put("/update-user/:email", async (req, res) => {
    try {
        const userEmail = req.params.email;
        const updatedData = req.body;

        const updatedUser = await User.findOneAndUpdate(
            { email: userEmail },
            updatedData,
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({
            message: "User updated successfully!",
            updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: " Error updating user" });
    }
});


app.delete("/delete-user/:email", async (req, res) => {
    try {
        const userEmail = req.params.email;

        const deletedUser = await User.findOneAndDelete({ email: userEmail });

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({
            message: "User deleted successfully!",
            deletedUser,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting user" });
    }
});



// SERVER
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});


