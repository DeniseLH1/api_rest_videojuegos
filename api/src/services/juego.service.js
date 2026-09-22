import {Juego} from "../model/juego.model.js";
export const JuegoService={
    async crear(datos){return Juego.create(datos);},
    async listar(filtro={}){return Juego.find(filtro).sort({createAdt: -1})},
    async buscarPorId(id){return Juego.findById(id);},
    async actualizar(id,datos){return Juego.frindByIdAndUpdate(id,datos,{new:true,runValidators:true});},
    async eliminar(id){return Juego.frindByIdAndDelete(id)},
};