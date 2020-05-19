import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage implements OnInit {

  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  currentDate =new Date() 

  post = { titulo: "", contenido: "", video: "", fechaC:new Date() }

  constructor(public restService: RestService, private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  addPost() {
    
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

  onSubmit() {
    this.post.titulo = ((document.getElementById("titulo") as HTMLInputElement).value)
    this.post.contenido = ((document.getElementById("content") as HTMLInputElement).value)
    this.post.video = this.previewUrl
    this.post.fechaC=this.currentDate
    this.restService.addPost(this.post).then((result) => {

    }, (err) => {
      console.log(err);
    })
    

    this.router.navigate(['/menu-fotos']).then(() => {
      window.location.reload();
    });




    // const formData = new FormData();
    // formData.append('files', this.fileData);
     
    // this.fileUploadProgress = '0%';
 
    // this.http.post('', formData, {
    //   reportProgress: true,
    //   observe: 'events'   
    // })
    // .subscribe(events => {
    //   if(events.type === HttpEventType.UploadProgress) {
    //     this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
    //     console.log(this.fileUploadProgress);
    //   } else if(events.type === HttpEventType.Response) {
    //     this.fileUploadProgress = '';
    //     console.log(events.body);          
    //     alert('SUCCESS !!');
    //   }
         
    // }) 
}

}
