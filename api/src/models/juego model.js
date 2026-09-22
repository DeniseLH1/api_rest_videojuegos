import {Schema,model} from "mongoose";

const juegoSchema =  new Schema({
    titulo: { type:String, required: true ,trim:true,minLenght:2,maxlenght:60},
})