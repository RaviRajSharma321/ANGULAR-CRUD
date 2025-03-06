import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

export class EmployeeDetails {
  empId: string;
  name: string;
  city: string;
  state: string;
  emaild: string;
  contactNo: string;
  address: string;
  pincode: string;

  constructor(){
    this.empId = '';
    this.name = '';
    this.city = '';
    this.state = '';
    this.emaild = '';
    this.contactNo = '';
    this.address = '';
    this.pincode = '';
  }
}

@Component({
  selector: 'app-add-employee-details',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-employee-details.component.html',
  styleUrl: './add-employee-details.component.scss'
})

export class AddEmployeeDetailsComponent {

  // employeeForm: FormGroup = new FormGroup({})

  employeeObj:EmployeeDetails = new EmployeeDetails;



  employeeForm:FormGroup = new FormGroup({
    empid: new FormControl(this.employeeObj.empId),
    name: new FormControl(this.employeeObj.name),
    city: new FormControl(this.employeeObj.city),
    state: new FormControl(this.employeeObj.state),
    emailid: new FormControl(this.employeeObj.empId),
    contactNo: new FormControl(this.employeeObj.contactNo),
    address: new FormControl(this.employeeObj.address),
    pincode: new FormControl(this.employeeObj.pincode)
  });

  onSave(){
    
  }

}
