import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  updateCustomerForm! : FormGroup;
  id : number = this.activatedRoute.snapshot.params["id"];
  role :any =''

  constructor(private activatedRoute : ActivatedRoute,
    private service :CustomerService,
    private fb : FormBuilder,
    private router : Router
  ) { }

  ngOnInit() {

     this.role = localStorage.getItem("role");

    this.updateCustomerForm = this.fb.group({
  
        name: ['', Validators.required],
  
        email: ['', [
          Validators.required,
          Validators.email
        ]],
  
        phoneNo: ['', [
          Validators.required,
          Validators.pattern('[0-9]{10}')
        ]],
        username: ['', [
        Validators.required,
        
      ]],
      password: ['', [
        Validators.required,
        
      ]],
        role: ['', [
          Validators.required,
          
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
  
  updateCustomer() {

  this.service.updateCustomer(this.id,this.updateCustomerForm.value).subscribe((resp:any)=>{
    console.log(resp);
    if(resp.id != null){
      this.router.navigateByUrl("/allCustomer");

    }
  })

  }

//   updateCustomer() {
//   console.log("Update button clicked");

//   this.service.updateCustomer(
//     this.id,
//     this.updateCustomerForm.value
//   ).subscribe(resp => {
//     console.log(resp);
//   });
// }



}
