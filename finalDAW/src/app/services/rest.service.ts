import { Injectable } from '@angular/core';
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
    }