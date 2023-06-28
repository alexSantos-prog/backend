import {Router} from "express";
//import CursoController from '../controllers/curso.cotroller';
import {list, create, detail} from "../controllers/curso.cotroller.js";

const cursos = Router();

//cursos.get("/cursos",(req,res)=> res.json("cursos!!"));
//cursos.get("/cursos",CursoController.list);
cursos.get("/cursos",list);
cursos.post("/cursos",create);
cursos.get("/cursos/:id",detail);
//tarea crear servicios para la actualizacion y eleminacion

export default cursos;