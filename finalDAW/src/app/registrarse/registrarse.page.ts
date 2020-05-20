import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  logUser = { username: "", password: "", password2: "" }
  constructor() { }

  ngOnInit() {
  }
  login() {
    this.logUser.username = ((document.getElementById("username") as HTMLInputElement).value)
    this.logUser.password = ((document.getElementById("password") as HTMLInputElement).value)
    this.logUser.password2 = ((document.getElementById("password2") as HTMLInputElement).value)
    if (this.logUser.username == "") {
      alert("El usuario es obligatorio")
    }
    else if (this.logUser.password == "") {
      alert("Falta la contraseña")
    }
    else if (this.logUser.password2 == "") {
      alert("Falta la contraseña")
    }
    else if (this.logUser.password != this.logUser.password2) {
      alert("Las contraseñas no coinciden")
    }
    // if (this.logUser.password ('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')) {
    //   alert("La contraseña debe tener entre 8 y 30 letras, contener mayusculas, minusculas, signos y numeros")
    // }

  }
}
