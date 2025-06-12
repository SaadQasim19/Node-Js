
import user_model from "../model/user_model.js";
import mongoose from "mongoose";

//& GET
export const getUser = async (req, res) => {
try {
    const data = await user_model.find({});
    // res.status(200).json(data);
    res.status(200).json({
        success: true,
        message: "Users retrieved successfully",
        data: data
    });
} catch (error) {
    
    res.status(500).json({
        success: false,
        message: "An error occurred while retrieving users",
        error: error.message
    });
}
}

export const createUser = async (req, res) => {
const userData = req.body;
if (!userData.name || !userData.email || !userData.password) {
    return res.status(400).json({ message: "All fields are required" });
}
try {
    const newUser = new user_model(userData);
    await newUser.save();
    res.status(201).json({
        success: true,
        message: "User created successfully",
        // user: {
        //     id: newUser._id,
        //     name: newUser.name,
        //     email: newUser.email
        // },
        user:newUser,
    });
} catch (error) {
    res.status(500).json({
        success: false,
        message: "An error occurred while creating the user",
        error: error.message
    });
}}

//* PUT -- Update user by ID
export const updateUser = async (req, res) => {
// const userId = req.params.id;
// const updateData = req.body;
const{id:userId} = req.params;
if (!updateData.name && !updateData.email && !updateData.password) {
    return res.status(400).json({ message: "At least one field is required to update" });

}
try {
    const updatedUser = await user_model.findByIdAndUpdate(userId, updateData, { new: true });
    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
        success: true,
        message: "User updated successfully",
        user: updatedUser
    });
} catch (error) {
    res.status(500).json({
        success: false,
        message: "An error occurred while updating the user",
        error: error.message
    });
}
}
export const deleteUser = async (req, res) => {
const { id: userId } = req.params;
try {
    const deletedUser = await user_model.findByIdAndDelete(userId);
    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
        success: true,
        message: `User with ID ${userId} deleted successfully`
    });
    

} catch (error) {
    res.status(500).json({
        success: false,
        message: "An error occurred while deleting the user",
        error: error.message
    });
}
}
