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

    saveUser(data) {

      return new Promise((resolve, reject) => {
        console.log("parte 1")
        console.log(data)
        console.log(JSON.stringify(data))
        this.http.post(this.apiUrl+'/users', data)
          .subscribe(res => {
            
        console.log("parte 2")
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
    }