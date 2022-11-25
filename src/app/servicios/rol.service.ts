import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Rol } from '../modelos/rol.model';
@Injectable({
  providedIn: 'root'
})
export class RolService {
  constructor(private http: HttpClient) { }

  listar(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${environment.url_gateway}/rol`);
  }
  eliminar(id:string){
    return this.http.delete<Rol>(`${environment.url_gateway}/rol/${id}`,);
  }
  getRol(id: string): Observable<Rol> {
    return this.http.get<Rol>(`${environment.url_gateway}/rol/${id}`);
  }
  crear(elRol: Rol) {
    return this.http.post(`${environment.url_gateway}/rol`, elRol);
  }
  editar(elRol: Rol, id:string,) {
    return this.http.put(`${environment.url_gateway}/rol/${id}`, elRol);
  }
}