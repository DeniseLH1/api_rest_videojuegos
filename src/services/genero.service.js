import { Genero } from "../models/genero.model.js";

const GENEROS_POR_DEFECTO = [
  { nombre: "accion", horasMinimas: 5 },
  { nombre: "rpg", horasMinimas: 20 },
  { nombre: "aventura", horasMinimas: 10 },
  { nombre: "estrategia", horasMinimas: 15 },
  { nombre: "plataformas", horasMinimas: 8 }
];

export const generoService = {
  inicializarGeneros: async () => {
    for (const genero of GENEROS_POR_DEFECTO) {
      await Genero.updateOne(
        { nombre: genero.nombre },
        { $setOnInsert: genero },
        { upsert: true }
      );
    }
  },

  obtenerPorNombre: async (nombreGenero) => {
    return await Genero.findOne({ nombre: nombreGenero.toLowerCase() });
  },

  obtenerTodos: async () => {
    return await Genero.find();
  }
};