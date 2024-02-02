import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseHTTP } from '../models/responseHTTP.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://localhost:3000'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private httpClient: HttpClient) { }

  registrarUsuario(nuevoUsuario: Usuario): Observable<ResponseHTTP>{
    const datosUsuario = JSON.stringify(nuevoUsuario);
    return this.httpClient.post<ResponseHTTP>(`${this.apiURL}/users`, datosUsuario, this.httpOptions);
  }
}
