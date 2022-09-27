import { Injectable } from '@angular/core';
import { EmpDetails } from '../common/emp-details';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  empDetails: EmpDetails[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToTask(theEmpDetails: EmpDetails) {


    let alreadyExistsInTask: boolean = false;
    let existingEmpDetails: EmpDetails = undefined;

    if (this.empDetails.length > 0) {
      // find the item in the cart based on item id

      existingEmpDetails = this.empDetails.find( tempEmpDetails => tempEmpDetails.id === theEmpDetails.id );

      // check if we found it
      alreadyExistsInTask = (existingEmpDetails != undefined);
    }

    if (alreadyExistsInTask
      ) {
//increment the assigning value
      existingEmpDetails.quantity++;
    }
    else {
      // just add the item to the array
      this.empDetails.push(theEmpDetails);
    }

    // compute total no assigned tasked
    this.computeTaskTotals();
  }

  computeTaskTotals() {

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentEmpDetails of this.empDetails) {
      totalPriceValue += currentEmpDetails.quantity ;
      totalQuantityValue += currentEmpDetails.quantity;
    }

 
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);


    this.logTaskData(totalPriceValue, totalQuantityValue);
  }

  logTaskData(totalPriceValue: number, totalQuantityValue: number) {

    console.log('Contents of the table');
    for (let tempEmpDetails of this.empDetails) {
      const subTotalPrice = tempEmpDetails.quantity ;
      console.log(`name: ${tempEmpDetails.name}, quantity=${tempEmpDetails.quantity}, username=${tempEmpDetails.username}, subTotalPrice=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log('----');
  }

  decrementQuantity(theEmpDetails: EmpDetails) {

    theEmpDetails.quantity--;

    if (theEmpDetails.quantity === 0) {
      this.remove(theEmpDetails);
    }
    else {
      this.computeTaskTotals();
    }
  }

  remove(theEmpDetails: EmpDetails) {

    // get index of item in the array
    const itemIndex = this.empDetails.findIndex( tempEmpDetails => tempEmpDetails.id === theEmpDetails.id );

    // if found, remove the item from the array at the given index
    if (itemIndex > -1) {
      this.empDetails.splice(itemIndex, 1);

      this.computeTaskTotals();
    }
  }

}
