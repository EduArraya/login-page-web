import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'localhost:3000'
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private httpClient: HttpClient) { }

  registrarUsuario(nuevoUsuario: any): Observable<Object>{
    const datosUsuario = JSON.stringify(nuevoUsuario);
    return this.httpClient.post<Object>("http://localhost:3000/users", datosUsuario, this.httpOptions);
  }
}
