import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';
  private baseUrlController = "http://localhost:8080/api/v1/users";
  private newURL = "http://localhost:8080/api/v1/users";

  getListURL:string = null;

  constructor(private httpClient: HttpClient) { }



  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.newURL}`, user);
  }

  getUser(id: number): Observable<any> {

    // need to build URL based on user id
    return this.httpClient.get(`${this.newURL}`);

    //return this.httpClient.get(`${this.newURL}/${id}`);
  }

}
