import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  post: any 
  id: string
  comments:any
  comment = { idUsuario: "", idPost: "", comentario:"", fecha:new Date()}
  isLogged:boolean=false
  isAdmin:boolean=false
  userLogged:any
  currentDate =new Date() 
  

  constructor(public restService: RestService,private router: ActivatedRoute) { }

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


    this.id = this.router.snapshot.params['id']
    this.getPostById()
    this.getCommentById()

    
  }

  getPostById() {
    this.restService.getPostById(this.id)
    .then(data => {
    this.post = data;
    console.log(this.post)
    });
    }

    getCommentById() {
      this.restService.getCommentsById(this.id)
      .then(data => {
      this.comments = data;
      console.log(data)
      });
      }

    createComment() {
    this.comment.fecha=this.currentDate
    this.comment.idUsuario=this.userLogged[0]["id"]
    this.comment.idPost=this.id
    this.comment.comentario=((document.getElementById("comentario")as HTMLInputElement).value)
    this.restService.saveComment(this.comment).then((result) => {

    }, (err) => {
    });
      }

      deletePost()
      {
        this.restService.deletePost(this.id)
        .then(data => {
          console.log("succesfdully deleted") 
        });

      }

}
