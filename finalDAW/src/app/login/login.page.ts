import { Component, OnInit } from '@angular/core';

import { RestService } from '../services/rest.service';
import { empty } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logUser = { username: "",password:""}
  //user = { username: "", password: "",role:""}
  user:any

  constructor(public restService: RestService,private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.logUser.username=((document.getElementById("username")as HTMLInputElement).value)
    this.logUser.password=((document.getElementById("password")as HTMLInputElement).value)
    this.restService.getLoggedUser(this.logUser)
    .then(data => {
    this.user=data
    
    console.log(this.user)
    

    if (Object.keys(data).length==0){
      console.log("username or password incorrect")
    }
    else if (Object.keys(data).length==1)
    {
      sessionStorage.clear();
      let key = 'logged User';
      sessionStorage.setItem(key, JSON.stringify(data));
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }
    });
    
  }

  

}
