import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = 'http://localhost:3000'
  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider')
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/users').subscribe(data => {

        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }

  getPost() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/post').subscribe(data => {

        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }

  getPostById(id) {

    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/post/' + id).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }

  saveUser(data) {

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/users', data)
        .subscribe(res => {

          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveComment(data) {

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/comment', data)
        .subscribe(res => {

          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  addPost(data) {

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/post', data)
        .subscribe(res => {

          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  getCommentsById(id) {

    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/comment/' + id).subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }


  deletePost(id) {
    return new Promise(resolve => {
      this.http.delete(this.apiUrl + '/post/' + id).subscribe(
        err => {
          console.log(err);
        });
    });
  }


  updatePost(id, data) {

    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl + '/post/'+id, data)
        .subscribe(res => {

          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getLoggedUser(data){
    console.log(data)
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl + '/login', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}