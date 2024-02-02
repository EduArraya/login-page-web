import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formularioIngreso: FormGroup;
  errorUsuarioRequerido: boolean = false;
  errorContraseniaRequerida: boolean = false; 

  constructor(private formulario: FormBuilder, private servicioAPI: ApiService){
    this.formularioIngreso = this.formulario.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hayError(campoVerificar: string): boolean{
    if(this.formularioIngreso.get(campoVerificar)?.hasError('required')){
      return true;
    }
    return false;
  }

  reiniciarValidaciones(){
    this.errorUsuarioRequerido = false;
    this.errorContraseniaRequerida = false;
  }

  login() {
    this.errorUsuarioRequerido = this.hayError('username')
    this.errorContraseniaRequerida = this.hayError('password')

    console.log(this.formularioIngreso)
    if(!this.errorUsuarioRequerido && !this.errorContraseniaRequerida){
      this.servicioAPI.registrarUsuario(this.formularioIngreso.value).subscribe(
        {
          next: (dataResponse) => alert(`HTTP Code: ${dataResponse.statusCode}\n${dataResponse.message}`),
          error: (error) => alert(error),
          complete: () => this.formularioIngreso.reset()
      }
      );
    }
  }
}
