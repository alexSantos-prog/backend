import Curso from "../models/curso.model.js";

export const create = (req, res) => {
    console.log("create",req.body);
    const {body:{titulo,descripcion,imagen},} = req;

    const curso = {
        titulo,
        descripcion,
        imagen,
    };

    Curso.create(curso).then((data) =>{
        res.send(data);
    }).catch((error) =>{
        res.status(500).send({
            message: error.message,
        });
    });

    //res.json("create desde el controlador");
};

/*const CursoController = {
    create: (req, res)=>{
        res.json('Hola desde el controlador');
    },
    list: (req,res) => {res.json('list desde el controlador');},
    detail: (req,res) =>{res.json('detalle desde el controlador');},
};*/

//export const create = (req, res)=>{res.json("create desde el controlador")};
export const list = (req, res) =>{
    //res.json("List desde el controlador");
    console.log("list metod called");
    Curso.findAll()
    .then((data) => res.send(data))
    .catch((error) =>{
        res.status(500).send({
            message:error.message,
        });
    });
};
export const detail = (req, res)=>{
    console.log("detalle", req.params);
    Curso.findByPk(req.params.id)
    .then((data) => res.send(data))
    .catch((error) =>{
        res.status(500).send({message:error.message,
        });
    });
    //req.params;
    //res.json("detail desde el controlador");
};
//export default CursoController;

