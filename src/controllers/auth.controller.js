import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs'


export const register = async (req,res)=>{
    const {email,userName,password} = req.body
    console.log(email,userName,password);
    try {

        const passwordHashed = await bcrypt.hash(password,10)

        const newUser = new userModel({
            userName,
            password:passwordHashed,
            email
        })
        const userSaved = await newUser.save()
        res.json(userSaved)
    } catch (error) {
        console.log("Error al crear el usuario: "+error);
    }
    
}


export const login = (req,res)=>{
    res.send('login')
}