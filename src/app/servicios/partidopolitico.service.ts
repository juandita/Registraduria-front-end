import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Partidopolitico } from '../modelos/partidopolitico.model';

@Injectable({
  providedIn: 'root'
})
export class PartidopoliticoService {

  constructor(private clienteHttp: HttpClient) { }

  listar() : Observable<Partidopolitico[]> {
    return this.clienteHttp.get<Partidopolitico[]>(`${environment.url_api_gateway}/partidopolitico`);
  }

  eliminar(id: string) : Observable<Partidopolitico> {
    return this.clienteHttp.delete<Partidopolitico>(`${environment.url_api_gateway}/partidopolitico/${id}`);
  }

  crear(nuevo_partidopolitico: Partidopolitico): Observable<Partidopolitico> {
    return this.clienteHttp.post<Partidopolitico>(`${environment.url_api_gateway}/partidopolitico`, nuevo_partidopolitico);
  }

  actualizar(datosActualizar: Partidopolitico): Observable<Partidopolitico> {
    let id = datosActualizar._id;
    return this.clienteHttp.put<Partidopolitico>(`${environment.url_api_gateway}/partidopolitico/${id}`, datosActualizar);
  }
}  
