import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router"
import { Employee } from 'src/app/common/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
//import { EmployeeCategory } from 'src/app/common/employee-category';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  //cuisine: EmployeeCategory = new EmployeeCategory(); 
  id: number = 0;
  //employeeStatus: EmployeeCategory[];
   
  constructor(private loginService: LoginService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    //this.listEmployeeCategories()
    this.handleEmployeeDetails()
    
  }


  
  handleEmployeeDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theEmployeeId: number = +this.route.snapshot.paramMap.get('id');

    this.employeeService.getEmployee(theEmployeeId).subscribe(
      data => {
        this.employee = data;
         
      }
    )
 
  }


  updateEmployee(){
    console.log(this.employee.status)
    const theEmployeeId: number = +this.route.snapshot.paramMap.get('id');
    this.employeeService.updateEmployee(theEmployeeId, this.employee).subscribe( data =>{
      console.log(data)
    }
    , error => console.log(error));
  //window.location.replace('/employees');
  }

 /* listEmployeeCategories() {
    
    this.employeeService.getEmployeeCategories().subscribe(
      data => {
        console.log('Employee Categories=' + JSON.stringify(data));
        this.employeeStatus = data;
      }
    );
  }*/

}
