import mongoose from " mongoose";
import app from "./app.js";

const PORT= process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/api-videojuegos";

try{
    await mongoose.connect(MONGO_URI);
    console.log("Conectado a Mongo:",MONGO_URI);
}catch(error){
    console.error("Error al conectar ",error.message);
    process.exit(1);
}

app.listen(PORT,()=>{
    console.log("Servidor Gamer listo en http//localhost:${PORT}")
})