import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  post: {} 
  id: string
  comments:any
  comment = { idUsuario: "", idPost: "", comentario:""}

  constructor(public restService: RestService,private router: ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.getPostById()
    this.getCommentById()
  }

  getPostById() {
    this.restService.getPostById(this.id)
    .then(data => {
    this.post = data;
    });
    }

    getCommentById() {
      console.log("funciona")
      this.restService.getCommentsById(this.id)
      .then(data => {
      this.comments = data;
      console.log(data)
      });
      }

    createComment() {
    this.comment.idUsuario=((document.getElementById("idUsuario")as HTMLInputElement).value)
    this.comment.idPost=this.id
    this.comment.comentario=((document.getElementById("comentario")as HTMLInputElement).value)
    this.restService.saveComment(this.comment).then((result) => {

    }, (err) => {
      console.log(err);
    });
      }


}
