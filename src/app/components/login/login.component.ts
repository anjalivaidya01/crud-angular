import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  role: any = '';

  constructor(
    private service: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {

    this.role = localStorage.getItem('role');

  }



  login() {

    const customer = {

      username: this.username,
      password: this.password

    };

    this.service
      .login(customer)
      .subscribe((resp: any) => {

        if (resp) {

          localStorage.setItem(
            "role",
            resp.role
          );

          localStorage.setItem(
            "username",
            resp.username
          );

          localStorage.setItem(
            "customerId",
            resp.id
          );

          alert("Login Successful");

          this.router.navigate(['/home']);

        }

      }, error => {

        alert("Invalid Username Or Password");

      });

  }


}