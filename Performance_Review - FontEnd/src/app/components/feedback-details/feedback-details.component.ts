import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router"

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {
  username:string = localStorage.getItem('username');

  
  user: User = new User();
  constructor(private userService:UserService,
    private route: ActivatedRoute
    ) {
   }

 

  ngOnInit(): void {
    //const theEmployeeId: number = +this.route.snapshot.paramMap.get('id');
      
    
    this.route.paramMap.subscribe(() => {
      this.handleUserDetails();
    })
  }

  handleUserDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const id: number = +this.route.snapshot.paramMap.get('id');

    this.userService.getUser(id).subscribe(
      data => {
        this.user = data;
         
      }
    )

  }  



}
