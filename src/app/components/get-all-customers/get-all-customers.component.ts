import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent  {

  customers:any = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.customerService.getAllCustomers().subscribe((resp)=>{
      console.log(resp);
      this.customers = resp;
    })
  }

}
