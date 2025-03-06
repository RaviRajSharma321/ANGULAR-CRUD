import { Component } from '@angular/core';
import { ListingPartComponent } from "../listing-part/listing-part.component";
import { ActivatedRoute, Router } from '@angular/router';
import { AddEmployeeDetailsComponent } from '../add-employee-details/add-employee-details.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ListingPartComponent, AddEmployeeDetailsComponent, ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {

  title: string = "Hello Angular";
  count: number = 20;
  show_listing: boolean = true;
  show_add_emp_form: boolean = false;

  constructor(private router: Router) {} 

  _add_employee(){
    this.show_listing = false;
    this.show_add_emp_form = true;
    this.router.navigate(['add-employees']);
  }

  _update_employee(){
    
  }

  _back_to_listing(){
    this.show_listing = true;
    this.show_add_emp_form = false;
  }

}
