import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.CONEXION)
        console.log("Conectado a la base de datos!");
    }catch(error){
        console.log(error);
    }
} 

