import { generoService } from "../services/genero.service.js";
export async function crearGenero(req, res, next) {
  try {
    const { nombre, horasMinimas } = req.body;

    if (!nombre || horasMinimas === undefined) {
      return res.status(400).json({ error: "Nombre y horas minimas son obligatorios" });
    }

    const nuevoGenero = await generoService.crear({ nombre, horasMinimas });
    res.status(201).json({ data: nuevoGenero });
  } catch (error) {
    next(error);
  }
}

export async function listarGeneros(req, res, next) {
  try {
    const generos = await generoService.obtenerTodos();
    res.json({ data: generos });
  } catch (error) {
    next(error);
  }
}