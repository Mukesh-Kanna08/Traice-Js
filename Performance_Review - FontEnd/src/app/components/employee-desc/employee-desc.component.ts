import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/services/detail.service';
import { EmpDetails } from 'src/app/common/emp-details';


@Component({
  selector: 'app-employee-desc',
  templateUrl: './employee-desc.component.html',
  styleUrls: ['./employee-desc.component.css']
})
export class EmployeeDescComponent implements OnInit {

  employee: Employee = new Employee();
  
  //status: EmployeeCategory = new EmployeeCategory();

  constructor(private employeeService: EmployeeService,
              private detailService: DetailService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    //const theEmployeeId: number = +this.route.snapshot.paramMap.get('id');
      
    
    this.route.paramMap.subscribe(() => {
      this.handleEmployeeDetails();
    })
  }

  handleEmployeeDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theEmployeeId: number = +this.route.snapshot.paramMap.get('id');

    this.employeeService.getEmployee(theEmployeeId).subscribe(
      data => {
        this.employee = data;
         
      }
    )

    this.employeeService.getEmployee(theEmployeeId).subscribe(
      data => {
        this.employee = data;
         
      }
    )

  }

 

 

  addToTask() {

    console.log(`Adding to task: ${this.employee.name}, ${this.employee.username}`);
    const theEmpDetails = new EmpDetails(this.employee);
    this.detailService.addToTask(theEmpDetails);
    
  }

}
