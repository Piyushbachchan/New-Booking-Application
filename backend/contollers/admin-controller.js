const { Admin } = require("mongodb");
const bcrypt = require("bcryptjs")

const addAdmin = async (req, res, next) => {
    const {email, password} = req.body;

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
module.exports = {addAdmin}