import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Candidato } from '../modelos/candidato.model'; 

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  constructor(private http: HttpClient) { }

  listar(): Observable<Candidato[]> {
    return this.http.get<Candidato[]>(`${environment.url_gateway}/candidato`);
  }
  eliminar(id:string){
    return this.http.delete<Candidato>(`${environment.url_gateway}/candidato/${id}`,);
  }
  getCandidato(id: string): Observable<Candidato> {
    return this.http.get<Candidato>(`${environment.url_gateway}/candidato/${id}`);
  }
  crear(Elcandidato: Candidato) {
    return this.http.post(`${environment.url_gateway}/candidato`, Elcandidato);
  }
  getCandidatobyCedula(cedula: string): Observable<Candidato> {
    return this.http.get<Candidato>(`${environment.url_gateway}/candidato/cedula/${cedula}`);
  }
  editar(Elcandidato: Candidato, id:string,) {
    return this.http.put(`${environment.url_gateway}/candidato/${id}`, Elcandidato);
  }
  asignarPartido(id:string,idPartido:string) {
    return this.http.put(`${environment.url_gateway}/candidato/${id}/partido/${idPartido}`, null);
  }
}
