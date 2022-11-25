import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Resultado } from '../modelos/resultado.model'; 


@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  constructor(private http: HttpClient) { }

  listar(): Observable<Resultado[]> {
    return this.http.get<Resultado[]>(`${environment.url_gateway}/resultado`);
  }
  eliminar(id:string){
    return this.http.delete<Resultado>(`${environment.url_gateway}/resultado/${id}`,);
  }
  getResultado(id: string): Observable<Resultado> {
    return this.http.get<Resultado>(`${environment.url_gateway}/resultado/${id}`);
  }
  crear(Elresultado: Resultado) {
    return this.http.post(`${environment.url_gateway}/resultado`, Elresultado);
  }
  editar(Elresultado: Resultado, id:string,) {
    return this.http.put(`${environment.url_gateway}/resultado/${id}`, Elresultado);
  }
}
