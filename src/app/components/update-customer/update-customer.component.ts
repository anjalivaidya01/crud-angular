import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  updateCustomerForm! : FormGroup;
  id : number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute : ActivatedRoute,
    private service :CustomerService,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.updateCustomerForm = this.fb.group({
  
        name: ['', Validators.required],
  
        email: ['', [
          Validators.required,
          Validators.email
        ]],
  
        phoneNo: ['', [
          Validators.required,
          Validators.pattern('[0-9]{10}')
        ]]
      });
    
    this.getCustomerById();
  }

  getCustomerById(){
    this.service.getCustomerById(this.id).subscribe((resp)=>{
      console.log(resp);
      this.updateCustomerForm.patchValue(resp);
    })
  }
  
  // updateCustomer() {

  // if (this.updateCustomerForm.valid) {

  //   this.service.updateCustomer(
  //     this.id,
  //     this.updateCustomerForm.value
  //   ).subscribe(
  //     (resp) => {
  //       console.log("Updated Successfully", resp);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );

  // }

  updateCustomer() {
  console.log("Update button clicked");

  this.service.updateCustomer(
    this.id,
    this.updateCustomerForm.value
  ).subscribe(resp => {
    console.log(resp);
  });
}

}


