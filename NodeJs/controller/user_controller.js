import user_model from "../model/user_model.js";

//* GET -- Get all users

export const getUsers = async (req, res)=>{
    try {
        
        const users = await user_model.find({});
        res.status(200).json({
            success:true,
            message: "Users retrieved successfully",
            users:users
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while retrieving users",
            error: error.message
        });
    }
}

//* POST -- Create a new user


export const createUser = async (req, res) => {
    const userUser = req.body;
  
    if (!userUser.name || !userUser.price || !userUser.image) {
      return res.status(400).json({
        success: false,
        message: "Required Fields are missing.",
      });
    }
  
    const newUser = new user_model(userUser);
    try {
      await newUser.save();
      res.status(201).json({
        success: true,
        message: "User Created Successfully",
        User: newUser,
      });
    } catch (error) {
      console.error("Error in creating product", error);
      res.status(400).json({ success: false, message: "Internal Server Error" });
    }
  };


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
