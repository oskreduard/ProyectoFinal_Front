import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Partido } from '../modelos/partido.model';
import { Resultado } from '../modelos/resultado.model'; 
import { Mesa } from '../modelos/mesa.model'; 
@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  constructor(private http: HttpClient) { }

  listar(): Observable<Resultado[]> {
    console.log("solicitud de listar");    
  return this.http.get<Resultado[]>(`${environment.url_gateway}/resultado`);
  }
  eliminar(id:string){
  return this.http.delete<Resultado>(`${environment.url_gateway}/resultado/${id}`,);
  }
  getResultado(id: string): Observable<Resultado> {
    console.log(id)
    return this.http.get<Resultado>(`${environment.url_gateway}/resultado/${id}`);
  }
  crear(id_candidato:string,id_mesa:string,elResultado: Resultado) {
    return this.http.post(`${environment.url_gateway}/resultado/candidato/${id_candidato}/mesa/${id_mesa}`, elResultado);
  }
  editar(id:string,id_candidato:string,id_mesa:string,elResultado: Resultado) {
    return this.http.put(`${environment.url_gateway}/resultado/${id}/candidato/${id_candidato}/mesa/${id_mesa}`, elResultado);
  }
}