import { Router } from "express";
import { crearGenero, listarGeneros } from "../controllers/genero.controller.js";

export const generoRouter = Router();

generoRouter.post("/", crearGenero);
generoRouter.get("/", listarGeneros);