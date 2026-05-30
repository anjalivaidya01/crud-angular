import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCustomerComponent } from './components/post-customer/post-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
{path:'customer',component:PostCustomerComponent},
{path:'allCustomer',component:GetAllCustomersComponent},
{path:'update-customer/:id',component:UpdateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
