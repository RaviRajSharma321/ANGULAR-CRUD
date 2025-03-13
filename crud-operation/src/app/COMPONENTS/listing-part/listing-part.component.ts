import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { EmployeeDetails } from '../add-employee-details/add-employee-details.component';

@Component({
  selector: 'app-listing-part',
  standalone: true,
  imports: [],
  templateUrl: './listing-part.component.html',
  styleUrl: './listing-part.component.scss'
})

export class ListingPartComponent {

  employeelist:EmployeeDetails[] = [];

  // constructor(){
  //   debugger;
  //   const olddata = localStorage.getItem("Empdata");
  //   if(olddata != null){
  //     const parsedata = JSON.parse(olddata);
  //     this.employeelist = parsedata;
  //   }
  // }


  // constructor() {
  //   if (typeof window !== 'undefined' && window.localStorage) {
  //     const olddata = localStorage.getItem("EmpData");
  //     if (olddata) {
  //       this.employeelist = JSON.parse(olddata);
  //     }
  //   }
  // }

}
