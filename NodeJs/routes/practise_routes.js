import express from 'express';

const router = express.Router();


//& GET
router.get('/' , (req,res)=>{
    res.send("GET request")
})

//&POST -- Create a new user
router.post('/' , (req,res)=>{
    const data = req.body;
    // const response = {
    //     message: "Data received successfully",
    //     data: data
    // };
    // res.status(201).json(response);
    const { name, email, password } = data;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    // Here you would typically save the user to the database
    res.status(201).json({ message: "User created successfully", user: { name, email } });
})

//&PUT -- Update user by ID
router.put('/:id' , (req,res)=>{
  
//     const { id } = req.params;
//   const updated = req.body;
//   res.json({ message: `User ${id} updated`, updated });


const userId = req.params.id;
const data = req.body;
if (!data.name && !data.email && !data.password) {
    return res.status(400).json({ message: "At least one field is required to update" });
    
}


res.status(200).json({ message: "User updated successfully", userId, updatedFields: data });
})

//&DELETE
router.delete('/:id' , (req,res)=>{
    // const userId = req.params.id;
    // res.status(200).json({ message: `User with ID ${userId} deleted successfully` });
    
    const {id} = req.params;

    res.status(200).json({ message: `User with ID ${id} deleted successfully` });
})


export default router;