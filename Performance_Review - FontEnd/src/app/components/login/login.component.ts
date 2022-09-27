import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router"
import { Employee } from 'src/app/common/employee';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username:string = localStorage.getItem('username');
  employee:Employee = new Employee();

  Employees: Array<Employee> = new Array();
  
  username_value:string;


  constructor(private loginService: LoginService,  
              private router: Router) { }


  ngOnInit(): void {
    
 
  
  }

  handleLogin() {

    
    this.loginService.getUser(this.employee.username).subscribe(
      data => {
       this.Employees = data; 
        
      }
      ,error => console.log(error));


    // check data entered
    if(this.Employees[0]?.username == this.employee.username){
      localStorage.setItem('username', this.employee.username);
 
      console.log("YES");
 
      window.location.replace('/employee');
      
    }
    else{
      alert("Username or Password is Incorrect")
      console.log("No");
    }
   

  }
  onSubmit(){
    console.log(this.employee);
     
    this.handleLogin();
  }


}

