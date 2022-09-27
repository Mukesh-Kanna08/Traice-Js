import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/common/employee';
import { ActivatedRoute } from '@angular/router';
import { timeoutWith } from 'rxjs/operators';
import { EmpDetails } from 'src/app/common/emp-details';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  username:string = localStorage.getItem('username');
  employee: Employee[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;

  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  previousKeyword: string = null;
  sortingMethod: string = "last_created";

  constructor(private employeeService: EmployeeService,
              private detailService: DetailService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.route.paramMap.subscribe(() => {
      this.listEmployee();
    });
  }

  listEmployee() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchEmployee();
    }
    else {
      this.handleListEmployee();
    }

  }

  handleSearchEmployee() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;

    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    // now search for the employee using keyword
    //this.employeeService.searchEmployeePaginate(this.thePageNumber - 1,
      //                                         this.thePageSize,
        //                                       theKeyword).subscribe(this.processResult());
                                               
  }

  handleListEmployee() {

    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');

    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);

    // now get the employee for the given category id
    this.employeeService.getEmployeeListPaginate(this.thePageNumber - 1,
                                               this.thePageSize,
                                               this.currentCategoryId,
                                               this.sortingMethod)
                                               .subscribe(this.processResult());


            
    }
    else {
      // not category id available ... default to category id 1
      this.employeeService.getAllEmployeeListPaginate(this.thePageNumber - 1,
        this.thePageSize,
        this.currentCategoryId,
        this.sortingMethod)
        .subscribe(this.processResult());
    }}

  processResult() {
    return data => {
      this.employee = data._embedded.employee;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listEmployee();
  }

  updateSortingMethod(sortingMethod: string) {
    this.sortingMethod = sortingMethod;
    this.listEmployee();
  }

  addToTask(theEmployee: Employee) {
    
    console.log(`Adding to task: ${theEmployee.name}, ${theEmployee.username}`);

    // TODO ... do the real work
    const theEmpDetails = new EmpDetails(theEmployee);

    this.detailService.addToTask(theEmpDetails);
  }

  
  deleteEmployee(theEmployeeId:number){
     console.log(theEmployeeId);
    this.employeeService.deleteEmployee(theEmployeeId).subscribe( data =>{
       
    }
    , error => console.log(error));
    window.location.replace('/employee');
  }

 
}
