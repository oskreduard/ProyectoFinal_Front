import { Rol } from "./rol.model";

export class Usuario {
    _id?:string;
    seudonimo?:string;
    correo?:string;
    contrasena?:string;
    token?:string;
    rol?:Rol[];
}

