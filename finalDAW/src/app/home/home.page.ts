import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users:any

  films: Observable<any>;
  constructor(private menu: MenuController,public restService: RestService) {
    this.getUsers()
  }


  getUsers() {
    this.restService.getUsers()
    .then(data => {
    this.users = data;
    console.log(this.users);
    });
    }
  
}
