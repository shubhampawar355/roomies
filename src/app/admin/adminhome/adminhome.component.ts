import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  emps: any;

  constructor(private service: AdminService,private router:Router) {
    
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((res) => {
      console.log("in admin getdata()")
      console.log(res);
      this.emps = res;
      console.log(this.emps);
    }, (error) => {
      console.log(error)
    })
  }

  doEdit(emp) 
  {
    console.log(emp)
    debugger;
    this.router.navigate(['http://localhost:4200/adminedit/'+emp]);
  }

  
  doDelete(id) {
    console.log(id);
    this.service.delete(id).subscribe((res)=>
    {
      console.log(res);
    },(error)=>{
      console.log(error);
    })
    this.router.navigate(['/adminhome']);
  }
  ngOnInit() {

  }

}
