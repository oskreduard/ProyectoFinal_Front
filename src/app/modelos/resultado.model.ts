import { Candidato } from "./candidato.model";
import { Mesa } from "./mesa.model";

export class Resultado {    
    _id?:string;
    candidato?:Candidato[];
    mesa?:Mesa[];
    numero_votos?:string;
}
