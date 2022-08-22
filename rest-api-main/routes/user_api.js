const express = require("express");

// Define Router
const Router = express.Router();

// Model Schema for User
const User = require("../Models/User");

// Add New user to Database
Router.post("/create-user", async (req, res) => {
    try {
        const { FirstName, LastName, Email, Password } = req.body;
        User.create({ FirstName, LastName, Email, Password }, (err, data) => {
            if (err) throw err;
            else
                res.status(200).json({
                    msg: "User Added Successfully ... ",
                    data: data,
                });
        });
    } catch (err) {
        res.status(401).json({ msg: "Unable To Add User ... ", err });
    }
});

//Get All Users
Router.get("/Users", async (req, res) => {
    try {
        await User.find({}, (err, data) => {
            if (err) throw err;
            else
                res.status(200).json({
                    msg: "All User ... ",
                    data: data,
                });
        });
    } catch (err) {
        res.status(401).json({ msg: "Unable To get Users ... ", err });
    }
});
//Update user Info
Router.put("/Update/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await User.findByIdAndUpdate(id, { ...req.body }, (err, data) => {
            if (err) throw err;
            else
                res.status(200).json({
                    msg: "User Updated Succefully",
                    data: data,
                });
        });
    } catch (err) {
        res.status(401).json({ msg: "Unable to Update User ... ", err });
    }
});

//Delete User
Router.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await User.findByIdAndDelete(id, (err, data) => {
            if (err) throw err;
            else
                res.status(200).json({
                    msg: "User Deleted Succefully",
                    data: data,
                });
        });
    } catch (err) {
        res.status(401).json({ msg: "Unable To Delete User", err });
    }
});
module.exports = Router;
