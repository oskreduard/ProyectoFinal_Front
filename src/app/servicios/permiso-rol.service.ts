import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Permiso } from '../modelos/permiso.model'; 
import { Rol } from '../modelos/rol.model'; 
import { PermisoRol } from '../modelos/permiso-rol.model'; 
@Injectable({
  providedIn: 'root'
})
export class PermisoRolService {
  constructor(private http: HttpClient) { }

  listar(): Observable<PermisoRol[]> {
    console.log("solicitud de listar");    
  return this.http.get<PermisoRol[]>(`${environment.url_gateway}/permiso-rol`);
  }
  eliminar(id:string){
  return this.http.delete<PermisoRol>(`${environment.url_gateway}/permiso-rol/${id}`,);
  }
  getPermisoRol(id: string): Observable<PermisoRol> {
    console.log(id)
    return this.http.get<PermisoRol>(`${environment.url_gateway}/permiso-rol/${id}`);
  }
  crear(id_rol:string,id_permiso:string) {
    return this.http.post(`${environment.url_gateway}/permiso-rol/rol/${id_rol}/permiso/${id_permiso}`,null );
  }
  editar(id:string,id_rol:string,id_permiso:string) {
    return this.http.put(`${environment.url_gateway}/permiso-rol/${id}/rol/${id_rol}/permiso/${id_permiso}`, null);
  }
}