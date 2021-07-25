import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url = 'http://localhost:8080/api/login';
  constructor( private http:HttpClient ) { }

  getData(){
    return this.http.get(this.url);
  }
}
