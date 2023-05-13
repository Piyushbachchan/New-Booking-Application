const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs")
const jwt =  require("jsonwebtoken")  
const addAdmin = async (req, res, next) => {
    const {email, password} = req.body;

    
        if (!email && 
            email.trim()==="" && 
            !password && password.trim()===""
            ){
            return res.status(422).json({message: "invalid input"})
        }
    

    let existingAdmin;
    try {
    existingAdmin = await Admin.findOne({email});
    }catch(err) {
        return console.log(err);
    }
    if(existingAdmin) {
        return res.status(400).json({message: "Admin already exists"})
    }
    let admin;
    const hashedPassword = bcrypt.hashSync(password);
    try {
        admin = new Admin({email, password: hashedPassword});
        admin = await admin.save();
    }catch(err) {
        return console.log(err);
    }
    if(!admin){
        return res.status(500).json({message: "Unexpexted to store admin"});
    }
    return res.status(201).json({admin})

}
const adminLogin= async (req, res, next) => {
    const {email, password} = req.body;
    if (!email && 
        email.trim()==="" && 
        !password && password.trim()===""
        ){
        return res.status(422).json({message: "invalid input"})
    }
    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({email});
    }catch (err) {
        return console.log(err);
    }
    if(!existingAdmin){
        return res.status(400).json({message: "Amin not found"});
    }

    const isPasswordCorrect = bcrypt.compare(password, existingAdmin.password );
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Incorrect password"});
    }

    const token = jwt.sign({id: existingAdmin.id}, process.env.SECRET_KEY,{
        expiresIn: "7d",
    });




    return res.status(200).json({message:"Authentication successful", token, id: existingAdmin._id});

}
module.exports = {addAdmin, adminLogin}