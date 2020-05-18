import { Component, OnInit, ɵConsole } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.page.html',
  styleUrls: ['./update-post.page.scss'],
})
export class UpdatePostPage implements OnInit {

  post: any 
  id: string
  posts = { titulo: "", contenido: "" }
  constructor(public restService: RestService,private router: ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.getPostById()
    console.log("aaaaaaaaaaaa")
  }

  getPostById() {
    this.restService.getPostById(this.id)
    .then(data => {
    this.post = data;
    console.log(this.post)
    });
    }

    updatePost()
    {
      this.posts.titulo = ((document.getElementById("titulo") as HTMLInputElement).value)
    this.posts.contenido = ((document.getElementById("content") as HTMLInputElement).value)
    console.log(this.posts)
      this.restService.updatePost(this.id,this.posts)
    .then(data => {
    });
    }

}
