import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
import { generoService } from "./services/genero.service.js";
dotenv.config();

const PORT= process.env.PORT || 3000;

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/api_juegos_clase";

try{
    await mongoose.connect(MONGO_URI);
    console.log("Conectado a Mongo:",MONGO_URI);
    
    await generoService.inicializarGeneros();
    console.log("Géneros por defecto verificados/inicializados");
    
}catch(error){
    console.error("Error al conectar ",error.message);
    process.exit(1);
}

app.listen(PORT,()=>{
    console.log('Servidor Gamer listo en http//localhost:${PORT}')
})