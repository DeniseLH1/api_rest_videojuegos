export function rutaNoEncontrada (res,req){
    res.status(404).json({error: "Ruta no encontrada",metodo: req.method, url: req.originalUrl});
}

export function manejarError(error,req,res,next){
    console.error("[Api Error",error);
    const status =error.statusCode || error.status || 5000;
    res.status(status).json({error: errormessage ||"Error interno"})
}