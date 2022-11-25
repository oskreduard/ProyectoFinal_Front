import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../modelos/usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]> {  
    return this.http.get<Usuario[]>(`${environment.url_gateway}/usuario`);
  }
  eliminar(id:string){
    return this.http.delete<Usuario>(`${environment.url_gateway}/usuario/${id}`,);
  }
  getUsuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.url_gateway}/usuario/${id}`);
  }
  getUsuariobyEmail(email: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.url_gateway}/usuario/email/1${email}`);
  }
  crear(elEstudiante: Usuario) {
    return this.http.post(`${environment.url_gateway}/usuario`, elEstudiante);
  }
  editar(id:string,elEstudiante: Usuario) {
    return this.http.put(`${environment.url_gateway}/usuario/${id}`, elEstudiante);
  }
  asignarRol(id:string,idRol:string) {
    return this.http.put(`${environment.url_gateway}/usuario/${id}/rol/${idRol}`, null);
  }
}