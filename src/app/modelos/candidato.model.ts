import { Partido } from "./partido.model";

export class Candidato {
    _id?:string;
    cedula?:string;
    numero_resolucion?:string;
    nombre?:string;
    apellido?:string;
    partido?:Partido[];
}
