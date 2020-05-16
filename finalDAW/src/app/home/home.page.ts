import { Component, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IonSlides} from '@ionic/angular';


import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('mySlider', { static: true })  slides: IonSlides;
  users:any
  user = { name: "", email: ""}

      swipeNext(){
        this.slides.slideNext();
      }
      swipePrev(){
        this.slides.slidePrev();
      }
  constructor(private menu: MenuController, public restService: RestService) {

  }

  getUsers() {
    this.restService.getUsers()
    .then(data => {
    this.users = data;
    console.log(this.users);
    });
    }

  

    saveUser() {
      this.user.name=((document.getElementById("name")as HTMLInputElement).value)
      this.user.email=((document.getElementById("email")as HTMLInputElement).value)

      this.restService.saveUser(this.user).then((result) => {
        console.log("home.page")
        console.log(result);
      }, (err) => {
        console.log("home.page error")
        console.log(err);
      });
    }
  
}
