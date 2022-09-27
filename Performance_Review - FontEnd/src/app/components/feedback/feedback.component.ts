import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router"
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackFormGroup: FormGroup;
  
  user: User = new User();
   

  username_value:string;
  theusername: string;
  thepassword: string;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) { }


  ngOnInit(): void {
    
  }


  saveUser(){
    this.userService.createUser(this.user).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));

    this.router.navigate(['/review']);
  }

 

}
