import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.css']
})
export class EmployeeStatusComponent implements OnInit {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
    this.updateEmployeeStatus();
  }

  updateEmployeeStatus() {

     /*subscribe to the employee totalPrice*/
    
     this.detailService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the employee totalQuantity
    this.detailService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }

}
