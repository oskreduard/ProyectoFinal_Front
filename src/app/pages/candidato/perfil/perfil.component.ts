import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Candidato } from '../../../modelos/candidato.model';
import { CandidatoService } from '../../../servicios/candidato.service'; 

@Component({
  selector: 'ngx-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
    candidatos: Candidato [];
    id_candidato: string = "";
    elCandidato: Candidato = {
      cedula: "",
      nombre: "",
      apellido:"",
      numero_resolucion:"",
    }
    
    nombresColumnas: string[] = ['Cedula','Nombre','Apellido','Numero de Resolucion'];
    constructor(private miServicioCandidatos: CandidatoService, 
                 private rutaActiva: ActivatedRoute,
                  private router: Router) { }
            
    ngOnInit(): void {
        this.id_candidato = this.rutaActiva.snapshot.params.id_candidato;
        this.getCandidato(this.id_candidato); 
    }
    getCandidato(id: string) {
      this.miServicioCandidatos.getCandidato(id).
        subscribe(data => {
          this.elCandidato = data;
        });
    }
    
}