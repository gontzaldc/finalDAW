import { Component, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IonSlides} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('mySlider', { static: true })  slides: IonSlides;

      swipeNext(){
        this.slides.slideNext();
      }
      swipePrev(){
        this.slides.slidePrev();
      }
  constructor(private menu: MenuController) {}

  
}
