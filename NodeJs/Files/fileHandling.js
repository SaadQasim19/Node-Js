//! -------------------------- file Handling --------------------------
// const fs = require('fs');
import fs from 'fs';




export const writeFile = fs.writeFile('example.txt', 'Hello' , (err)=>{
    if(err) throw err;
    console.log('File created successfully');
})


export const newFile = fs.writeFile('newFile.txt' , "Old Texts" , (err , data)=>{
    const newData = 'New Texts' ;
    fs.writeFile('newFile.txt', newData, (err) => {
        if (err) throw err;
        console.log('File updated successfully');
    });
  
})


