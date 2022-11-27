import { Permiso } from "./permiso.model";
import { Rol } from "./rol.model";

export class PermisoRol {
     
        _id?:string;
        permiso?:Permiso[];
        rol?:Rol[];
        numero_votos?:string;
 
}
