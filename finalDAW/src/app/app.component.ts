import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  userLogged:any
  isLogged:boolean=false
  isAdmin:boolean=true
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
    
  }
  
  initializeApp() {

    if (sessionStorage.length>0){
      this.isLogged=true
      this.userLogged=JSON.parse(sessionStorage.getItem("logged User"))

      if (this.userLogged[0]["role"]=="admin")
      {
        this.isAdmin=true
      }
      else if (this.userLogged[0]["role"]!="admin"){
        this.isAdmin=false
  
      }
    }
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }
  
  logout()
  {
    sessionStorage.clear()
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
  
}
