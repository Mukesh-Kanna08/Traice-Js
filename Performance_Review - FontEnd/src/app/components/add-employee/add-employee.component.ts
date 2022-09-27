import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router"
import { Employee } from 'src/app/common/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  status: Employee = new Employee(); 
  id: number = 0;
  employeeStatus: Employee[];
  selectedStatus:number = 1;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    // this.listEmployeeCategories();
  }


  
  handleAddEmployee() {
     

    this.employeeService.addEmployee(this.employee).subscribe( data =>{    
    },
    error => console.log(error));
    console.log(this.employee);
    window.location.replace('/employee');
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

  /*listEmployeeCategories() {
    
    this.employeeService.getEmployeeCategories().subscribe(
      data => {
        console.log('Employee Categories=' + JSON.stringify(data));
        this.employeeStatus = data;
      }
    );
  }*/
 

}
