import { Candidato } from "./candidato.model";
import { Mesa } from "./mesa.model";

export class Resultado {
    _id?:string;
    numero_votos?:string;
    candidato?:Candidato[];
    mesa?:Mesa[];
}
