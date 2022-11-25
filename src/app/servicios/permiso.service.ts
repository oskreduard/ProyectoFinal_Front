import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Permiso } from '../modelos/permiso.model'; 
@Injectable({
  providedIn: 'root'
})
export class PermisoService {
  constructor(private http: HttpClient) { }

  listar(): Observable<Permiso[]> {
    return this.http.get<Permiso[]>(`${environment.url_gateway}/permiso`);
  }
  eliminar(id:string){
    return this.http.delete<Permiso>(`${environment.url_gateway}/permiso/${id}`,);
  }
  getPermiso(id: string): Observable<Permiso> {
    return this.http.get<Permiso>(`${environment.url_gateway}/permiso/${id}`);
  }
  crear(elPermiso: Permiso) {
    return this.http.post(`${environment.url_gateway}/permiso`, elPermiso);
  }
  editar(elPermiso: Permiso, id:string,) {
    return this.http.put(`${environment.url_gateway}/permiso/${id}`, elPermiso);
  }
}