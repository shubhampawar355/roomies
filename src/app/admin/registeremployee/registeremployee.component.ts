import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Employee, { Address } from '../../models/employee.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-registeremployee',
  templateUrl: './registeremployee.component.html',
  styleUrls: ['./registeremployee.component.css']
})
export class RegisteremployeeComponent implements OnInit {

   
  emp:Employee;
  permadd:Address;
  localadd:Address;

  constructor(private route: ActivatedRoute, 
    private service: AdminService,
       private router: Router) { 
         
       }

  ngOnInit() {
  this.emp=new Employee();
  this.permadd=new Address();
  this.localadd=new Address();
  this.emp.localadd=this.localadd;
  this.emp.permadd=this.permadd;
  }

  registerEmp(){
    this.emp.password=this.emp.name;
    this.service.registerEmployee(this.emp).subscribe((res) => {
      console.log("in admin registerEmp()");
      console.log(res);
      //alert("Registered successfully");
     this.router.navigate(['/admin']);
    }, (error) => {
      console.log(error)
    })
  }
  CancelUpdate(){
    this.router.navigate(['/adminhome']);
  }

}
