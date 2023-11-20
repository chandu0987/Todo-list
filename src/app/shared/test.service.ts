import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public http: HttpClient) { }

  getData(){
   return this.http.get('https://api.publicapis.org/entries')
  }
}
