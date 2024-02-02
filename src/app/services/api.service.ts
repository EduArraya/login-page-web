import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseHTTP } from '../models/responseHTTP.model';

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

  registrarUsuario(nuevoUsuario: any): Observable<ResponseHTTP>{
    const datosUsuario = JSON.stringify(nuevoUsuario);
    return this.httpClient.post<ResponseHTTP>(`${this.apiURL}/users`, datosUsuario, this.httpOptions);
  }
}
