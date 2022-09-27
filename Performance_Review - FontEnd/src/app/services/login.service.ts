import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../common/employee';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
  private baseUrl = 'http://localhost:8080/api/employee';
  private baseUrlController = "http://localhost:8080/api/v1/employee";

  constructor(private httpClient: HttpClient) { }


  getUser(username: string): Observable<Employee[]> {

    // search url
    const searchUrl = `${this.baseUrl}/search/findByUsername?username=${username}`;

    return this.httpClient.get<GetResponseUser>(searchUrl).pipe(
      map(response => response._embedded.employee)
    );
  }


  createUser(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrlController}`, employee);
  }
 


}


interface GetResponseUser {
  _embedded: {
    employee: Employee[];
  }}

 