import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})

export class PostCustomerComponent implements OnInit {

  postCustomerForm!: FormGroup;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.postCustomerForm = this.fb.group({

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
  }

  postCustomer() {

    if (this.postCustomerForm.invalid) {
      this.postCustomerForm.markAllAsTouched();
      return;
    }

    this.customerService
      .postCustomer(this.postCustomerForm.value)
      .subscribe((resp) => {

        console.log(resp);

        alert("Customer Added Successfully");

        this.router.navigateByUrl("/");
      });
  }
}