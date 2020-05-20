import { Component, OnInit } from '@angular/core';

import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  logUser = { username: "", password: "", role: "user" }
  username:string
  password:string
  password2:string
  constructor(public restService: RestService) { }

  ngOnInit() {
  }
  login() {
    this.username = ((document.getElementById("username") as HTMLInputElement).value)
    this.password = ((document.getElementById("password") as HTMLInputElement).value)
    this.password2 = ((document.getElementById("password2") as HTMLInputElement).value)
    if (this.username == "") {
      alert("El usuario es obligatorio")
    }
    else if (this.password == "") {
      alert("Falta la contraseña")
    }
    else if (this.password2 == "") {
      alert("Falta la contraseña")
    }
    else if (this.password != this.password2) {
      alert("Las contraseñas no coinciden")
    }
    else if(this.username != "" && this.password != "" && this.password2 != "" && this.password == this.password2){
      this.logUser.username = ((document.getElementById("username") as HTMLInputElement).value)
      this.logUser.password = ((document.getElementById("password2") as HTMLInputElement).value)

      this.restService.saveUser(this.logUser).then((result) => {
      }, (err) => {
        console.log(err);
      })
    }
    // if (this.logUser.password ('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')) {
    //   alert("La contraseña debe tener entre 8 y 30 letras, contener mayusculas, minusculas, signos y numeros")
    // }

  }
}
