import { Component, OnInit } from '@angular/core';
import { EmpDetails } from 'src/app/common/emp-details';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  empDetails: EmpDetails[] = [];
  totalQuantity: number = 0;
  username:string = localStorage.getItem('username');

  constructor(private detailService: DetailService) { }

  ngOnInit(): void {
    this.listEmpDetails();
  }

  listEmpDetails() {

    // get a handle to the cart items
    this.empDetails = this.detailService.empDetails;

    /* subscribe to the cart totalPrice
    this.detailService.totalPrice.subscribe(
      data => this.totalPrice = data
    );*/

    // subscribe to the cart totalQuantity
    this.detailService.totalQuantity.subscribe( 
      data => this.totalQuantity = data
      
    );

    

    // compute cart total price and quantity
    this.detailService.computeTaskTotals();
  }

  incrementQuantity(theEmpDetails: EmpDetails) {
    this.detailService.addToTask(theEmpDetails);
  }

  decrementQuantity(theEmpDetails: EmpDetails) {
    this.detailService.decrementQuantity(theEmpDetails);
  }

  remove(theEmpDetails: EmpDetails) {
    this.detailService.remove(theEmpDetails);
  }

  /*getTotalPrice(){
    localStorage.setItem('totalPrice', this.totalPrice.toString());
  }*/

  
}
