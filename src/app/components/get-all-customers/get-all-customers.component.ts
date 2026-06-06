import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent {

  customers: any = [];
  searchText = '';
  customerNotFound: boolean = false;
  role: any = '';

  
pagedCustomers: any[] = [];

currentPage: number = 1;
pageSize: number = 5;




  constructor(private customerService: CustomerService) { }


  ngOnInit() {
    // this.getAllCustomers();
    this.loadCustomer();
    this.role = localStorage.getItem('role');

  }

  // loadCustomer() {
  //   this.customerService.getAllCustomers().subscribe((resp) => {
  //     console.log(resp);
  //     this.customers = resp;
  //     this.customerNotFound = false;
  //   })
  // }
  loadCustomer() {

  this.customerService.getAllCustomers().subscribe((resp:any[]) => {

    this.customers = resp;

    this.customerNotFound = false;

    this.updatePage();

  });

}updatePage() {

  const startIndex = (this.currentPage - 1) * this.pageSize;

  const endIndex = startIndex + this.pageSize;

  this.pagedCustomers = this.customers.slice(startIndex, endIndex);

}

previousPage() {

  if (this.currentPage > 1) {

    this.currentPage--;

    this.updatePage();

  }

}

nextPage() {

  if (this.currentPage * this.pageSize < this.customers.length) {

    this.currentPage++;

    this.updatePage();

  }

}



  deleteCustomer(id: number) {

    const confirmDelete = confirm("Are you sure you want to delete this customer?");

    if (confirmDelete) {

      this.customerService.deleteCustomer(id).subscribe(() => {
        alert("Customer deleted successfully");
        this.loadCustomer();
      });
    }
  }





  // searchCustomer() {

  //   // If input is empty, show all customers
  //   if (!this.searchText.trim()) {

  //     this.customerNotFound = false;

  //     this.loadCustomer();

  //     return;
  //   }

  //   this.customerService
  //     .searchCustomer(this.searchText)
  //     .subscribe((resp: any[]) => {

  //       this.customers = resp;

  //       this.customerNotFound = resp.length === 0;
  //     });
  // }

  searchCustomer() {

  if (!this.searchText.trim()) {

    this.loadCustomer();

    return;

  }

  this.customerService
      .searchCustomer(this.searchText)
      .subscribe((resp:any[]) => {

        this.customers = resp;

        this.customerNotFound = resp.length === 0;

        this.currentPage = 1;

        this.updatePage();

      });

}

}

