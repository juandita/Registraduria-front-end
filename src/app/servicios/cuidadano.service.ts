import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuidadano } from '../modelos/cuidadano.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuidadanoService {

  constructor(private clienteHttp: HttpClient) { }

  listar() : Observable<Cuidadano[]> {
    return this.clienteHttp.get<Cuidadano[]>(`${environment.url_api_gateway}/cuidadano`);
  }

  eliminar(id: string) : Observable<Cuidadano> {
    return this.clienteHttp.delete<Cuidadano>(`${environment.url_api_gateway}/cuidadano/${id}`);
  }

  crear(nuevo_cuidadano: Cuidadano): Observable<Cuidadano> {
    return this.clienteHttp.post<Cuidadano>(`${environment.url_api_gateway}/cuidadano`, nuevo_cuidadano);
  }

  actualizar(datosActualizar: Cuidadano): Observable<Cuidadano> {
    let id = datosActualizar._id;
    return this.clienteHttp.put<Cuidadano>(`${environment.url_api_gateway}/cuidadano/${id}`, datosActualizar);
  }


}