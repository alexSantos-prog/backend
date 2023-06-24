import { Sequelize } from 'sequelize';

import dbConfig from '../../db.config';
import Curso from './curso.model';

const {DB, USER, PASSWORD, HOST, dialect, pool} =dbConfig

export const sequelize = new Sequelize(
    DB, USER, PASSWORD, {
        host: HOST,
        dialect: dialect,
        pool: pool,
        operatorsAliases: false,
    }
);

const db = {};

db.sequelize = sequelize;
db.cursos = Curso;
db.sequelize.sync().then(()=> console.log('sync databse success full')).catch(error =>console.error("Some error", error));
