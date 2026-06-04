import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent  {

  customers:any = [];
  searchText = '';
  customerNotFound:boolean =false; 

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    // this.getAllCustomers();
    this.loadCustomer();
    
  }

  loadCustomer(){
    this.customerService.getAllCustomers().subscribe((resp)=>{
      console.log(resp);
      this.customers = resp;
      this.customerNotFound= false;
    })
  }

  // deleteCustomer(id:number){
  //   this.customerService.deleteCustomer(id).subscribe((resp)=>{
  //      console.log(resp);
  //      this.getAllCustomers();
  //   })
  // }

  deleteCustomer(id: number) {

    const confirmDelete = confirm("Are you sure you want to delete this customer?");

    if (confirmDelete) {
      
      this.customerService.deleteCustomer(id).subscribe(() => {
        alert("Customer deleted successfully");
        this.loadCustomer();
      });
    }
  }


  


searchCustomer() {

  // If input is empty, show all customers
  if (!this.searchText.trim()) {

    this.customerNotFound = false;

    this.loadCustomer();

    return;
  }

  this.customerService
    .searchCustomer(this.searchText)
    .subscribe((resp: any[]) => {

      this.customers = resp;

      this.customerNotFound = resp.length === 0;
    });
}

  }

