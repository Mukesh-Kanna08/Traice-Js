import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../common/Employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { EmployeeCategory } from '../common/Employee-category';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/employee';

  private categoryUrl = 'http://localhost:8080/api/status';

  private newURL = "http://localhost:8080/api/v1/employee";

  getListURL:string = null;

  constructor(private httpClient: HttpClient) { }

  updateEmployee(id: number, Employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.newURL}/${id}`, Employee);
  }

  addEmployee(Employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.newURL}`, Employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.newURL}/${id}`);
  }

  getEmployee(theEmployeeId: number): Observable<Employee> {

    // need to build URL based on Employee id
    const employeeUrl = `${this.baseUrl}/${theEmployeeId}`;

    return this.httpClient.get<Employee>(employeeUrl);
  }

  /*getEmployeeStatus(theEmployeeId: number): Observable<EmployeeCategory> {

    // need to build URL based on Employee id
    const employeeUrl = `${this.baseUrl}/${theEmployeeId}/status`;

    return this.httpClient.get<EmployeeCategory>(employeeUrl);
  }*/

  getEmployeeListPaginate(thePage: number, 
                         thePageSize: number, 
                         theCategoryId: number,
                         sortingMethod: string): Observable<GetResponseEmployees> {
    
     
    if(sortingMethod == "First Created"){
        // need to build URL based on category id, page and size 
      this.getListURL = `${this.baseUrl}/search/findByStatus?status=${theCategoryId}`
        + `&page=${thePage}&size=${thePageSize}`;
    }
    else if(sortingMethod == "Last Created"){
      this.getListURL = `${this.baseUrl}/search/findByStatusOrderByDateCreatedDesc?status=${theCategoryId}`
      + `&page=${thePage}&size=${thePageSize}`;
    }

    else{
      this.getListURL = `${this.baseUrl}/search/findByStatusOrderByNameAsc?status=${theCategoryId}`
      + `&page=${thePage}&size=${thePageSize}`;
    }



    return this.httpClient.get<GetResponseEmployees>(this.getListURL);
  }

  getAllEmployeeListPaginate(thePage: number, 
    thePageSize: number, 
    theCategoryId: number,
    sortingMethod: string): Observable<GetResponseEmployees> {

      if(sortingMethod == "First Created"){
        // need to build URL based on category id, page and size 
      this.getListURL = `${this.baseUrl}`;
    }
    else if(sortingMethod == "Last Created"){
      this.getListURL = `${this.baseUrl}/search/findAllByOrderByDateCreatedDesc?page=${thePage}&size=${thePageSize}`;
    }

    else{
      this.getListURL = `${this.baseUrl}/search/findAllByOrderByNameAsc?page=${thePage}&size=${thePageSize}`;
    }

    return this.httpClient.get<GetResponseEmployees>(this.getListURL);
}


 /* getEmployeeList(theCategoryId: number): Observable<Employee[]> {

    // need to build URL based on category id 
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getEmployee(searchUrl);
  }

  searchEmployees(theKeyword: string): Observable<Employee[]> {

    // need to build URL based on the keyword 
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getEmployee(searchUrl);
  }*/


  searchEmployeesPaginate(thePage: number, 
                        thePageSize: number, 
                        theKeyword: string): Observable<GetResponseEmployees> {

    // need to build URL based on keyword, page and size 
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
                    + `&page=${thePage}&size=${thePageSize}`;
    
    return this.httpClient.get<GetResponseEmployees>(searchUrl);
  }







 


}

interface GetResponseEmployees {
  _embedded: {
    products: Employee[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseEmployeeCategory {
  _embedded: {
   // status: EmployeeCategory[];
  }
}