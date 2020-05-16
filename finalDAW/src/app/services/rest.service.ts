import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl='http://localhost:3000'
  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider')
  }

  getUsers() {
    return new Promise(resolve => {
    this.http.get(this.apiUrl+'/users').subscribe(data => {
      
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
    }

    getPost() {
      return new Promise(resolve => {
      this.http.get(this.apiUrl+'/post').subscribe(data => {
        
      resolve(data);}, 
      err => {
      console.log(err);
      });
      });
      }

      getPostById(id) {
        
        console.log(this.apiUrl+'/post/'+id)
        return new Promise(resolve => {
        this.http.get(this.apiUrl+'/post/'+id).subscribe(data => {
        resolve(data);}, 
        err => {
        console.log(err);
        });
        });
        }

    saveUser(data) {

      return new Promise((resolve, reject) => {
        console.log(data)
        console.log(JSON.stringify(data))
        this.http.post(this.apiUrl+'/users', data)
          .subscribe(res => {
            
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    saveComment(data) {

      return new Promise((resolve, reject) => {
        console.log(data)
        console.log(JSON.stringify(data))
        this.http.post(this.apiUrl+'/comment', data)
          .subscribe(res => {
            
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }


    addPost(data) {

      return new Promise((resolve, reject) => {
        console.log(data)
        JSON.stringify(data)
        this.http.post(this.apiUrl+'/post', data)
          .subscribe(res => {
            
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }


    getCommentsById(id) {
        
      return new Promise(resolve => {
      this.http.get(this.apiUrl+'/comment').subscribe(data => {
      resolve(data);}, 
      err => {
      console.log(err);
      });
      });
      }
    }