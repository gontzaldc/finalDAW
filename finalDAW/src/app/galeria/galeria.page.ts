import { Component, OnInit } from '@angular/core';


import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  galeria:any

  isLogged:boolean=false
  isAdmin:boolean=false
  userLogged:any

  images = { image: ""}

  
  constructor(public restService: RestService, private router: Router) { }

  ngOnInit() {
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

    this.geImages()
    
  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }
  geImages() {
    this.restService.getGaleria()
    .then(data => {
    this.galeria = data;
    console.log(this.galeria);
    });
    }

    onSubmit()
    {
      this.images.image = this.previewUrl
      this.restService.addImageToGalery(this.images).then((result) => {
      }, (err) => {
        console.log(err);
      })
     
      
    }

}
