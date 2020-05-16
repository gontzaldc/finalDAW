import { Component, OnInit } from '@angular/core';

import { RestService } from '../services/rest.service';
@Component({
  selector: 'app-menu-fotos',
  templateUrl: './menu-fotos.page.html',
  styleUrls: ['./menu-fotos.page.scss'],
})
export class MenuFotosPage implements OnInit {
  posts:any
  constructor(public restService: RestService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.restService.getPost()
    .then(data => {
    this.posts = data;
    console.log(this.posts);
    });
    }

}
