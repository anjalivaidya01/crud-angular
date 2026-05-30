import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostCustomerComponent } from '../components/post-customer/post-customer.component';
import { Observable } from 'rxjs';

const BASIC_URL="http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient ) {}


    postCustomer(customer : any) :Observable<any>{
      return this.http.post(BASIC_URL + "/api/customer", customer)
    
   }

   getAllCustomers() : Observable<any>{
       return this.http.get(BASIC_URL+"/api/customers")
   }

   getCustomerById(id:number) : Observable<any>{
       return this.http.get(BASIC_URL+"/api/customer/" +id)
   }

   updateCustomer(id: number, customer: any) {
  return this.http.put(BASIC_URL+ "/api/customer/" + id, customer);
}
}
