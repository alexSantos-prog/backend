
import express from "express";
//import  Sequelize, { DataTypes }  from "sequelize";
//import dbconfig  from "../db.config";
import indexRoutes from './routes/index.routes.js';
import cursoRoutes from "./routes/curso.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({}))

app.use(indexRoutes);
app.use(cursoRoutes);

export default app;

/*
app.get('/', (req, res) => res.json('hola desde express'));
app.get('/hola', (req, res) => res.json('diplomado usip'));
app.post('/usuario', (req, res) => res.json('peticion POST'));
app.put('/usuario', (req, res) => res.json('peticion PUT'));
app.delete('/usuario', (req, res) => res.json('peticion DELETE'));

//cursos
app.get("/ping", (req, res) =>{
    console.log("dbconfig", JSON.stringify(dbconfig));
    //res.json(dbconfig);
    const{DB, USER, PASSWORD, HOST, dialect, pool} = dbconfig;
    const sequelize = new Sequelize(
        DB,
        USER,
        PASSWORD,
        {
            host: HOST,
            dialect: dialect,
            pool:pool,
            operatorsAliases:false,
        });
        console.log("connection ok");
        const Curso = sequelize.define('cursos',{
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            descripcion:{
                type: DataTypes.TEXT,
                allowNull: true,
            },
            imagen: {
                type: DataTypes.STRING,
                allowNull: true,

            },
           
        });
        sequelize.sync().then(()=>{
            console.log("tabla fue creada");
        }).catch(error =>console.error("no se pudo crear la tabla",error));
        res.json("conexion exitosa a la base de datos 2131");
});
*/
//app.listen(3000);

//console.log("hola desde express!!!");