import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
//import { EmployeeCategory } from 'src/app/common/employee-category';

@Component({
  selector: 'app-remove-employee',
  templateUrl: './remove-employee.component.html',
  styleUrls: ['./remove-employee.component.css']
})
export class RemoveEmployeeComponent implements OnInit {
  public get employeeService(): EmployeeService {
    return this._employeeService;
  }
  public set employeeService(value: EmployeeService) {
    this._employeeService = value;
  }

  constructor(
    private _employeeService: EmployeeService,
    private route: ActivatedRoute) { }


    employee: Employee = new Employee();
  ngOnInit(): void {
    this.deleteEmployee();
    
  }

 


  deleteEmployee(){
    const theEmployeeId: number = +this.route.snapshot.paramMap.get('id');
    this.employeeService.deleteEmployee(theEmployeeId).subscribe( data =>{
      window.location.replace('/employee');
    }
    , error => console.log(error));
    window.location.replace('/employee');
  }

}
