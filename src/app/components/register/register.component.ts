import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
       
        private router: Router
  ) { }

  ngOnInit(): void {
  }

 

user:any={

  name:'',
  email:'',
  phoneNo:'',
  username:'',
  password:'',
  role:''

};

register(){

  this.customerService.register(this.user).subscribe((resp:any)=>{

        if(resp){

          alert("User Registered Successfully");

          this.router.navigate(['/']);

        }else{

          alert("Username Already Exists");

        }

      });

}

// register(){

//   const user = {

//     username:this.username,
//     password:this.password,
//     role:this.role

//   };

//   this.customerService.register(user)
//       .subscribe((resp:any)=>{

//         if(resp){

//           alert("Registration Successful");

//           this.router.navigate(['/login']);

//         }
//         else{

//           alert("Username Already Exists");

//         }

//       });

// }

}
