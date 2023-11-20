import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  firstName ='';
  lastName = '';
   constructor( private router: Router){
  }
  
login(){
  console.log(this.firstName, this.lastName)
  this.router.navigate(['/home', {firstName : this.firstName, lastName: this.lastName}])
}
}
