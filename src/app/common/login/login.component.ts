import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service'
import Employee from '../../models/employee.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  PassengerVerify = {};
  user: any;
  form:Employee;
  constructor(public service: CommonService, private router: Router ) { 

    this.form= new Employee();

  }

  ngOnInit() {
  }

  ValidateUser(myForm) {
    console.log("validate User");
    console.log(myForm.form.value);
   this.PassengerVerify = myForm.form.value;
   console.log(this.PassengerVerify)
   this.service.CheckCredentialsWithDB(this.PassengerVerify);
   this.navigateTo();
  }

  navigateTo() {
    if (this.service.IsLoggedIn) {
      this.user = window.sessionStorage.getItem('isActive');
      console.log(this.user);
     }
  }

  onCancel(){

  }

}
