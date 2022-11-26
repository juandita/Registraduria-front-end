import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Candidato } from '../modelos/candidato.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private clienteHttp: HttpClient) { }

  listar() : Observable<Candidato[]> {
    return this.clienteHttp.get<Candidato[]>(`${environment.url_api_gateway}/candidato`);
  }

  eliminar(id: string) : Observable<Candidato> {
    return this.clienteHttp.delete<Candidato>(`${environment.url_api_gateway}/candidato/${id}`);
  }

  crear(nuevo_candidato: Candidato): Observable<Candidato> {
    return this.clienteHttp.post<Candidato>(`${environment.url_api_gateway}/candidato`, nuevo_candidato);
  }

  actualizar(datosActualizar: Candidato): Observable<Candidato> {
    let id = datosActualizar._id;
    return this.clienteHttp.put<Candidato>(`${environment.url_api_gateway}/candidato/${id}`, datosActualizar);
  }
}  