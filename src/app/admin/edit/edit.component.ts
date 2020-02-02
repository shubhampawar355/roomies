import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service'



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp: any;
myid:number;
  constructor(private route: ActivatedRoute,
    private service: AdminService,
    private router: Router) {

  }
  ngOnInit() {
    debugger;
    let No;
    
    this.route.paramMap.subscribe((result) => {
      No = result.get("empId");
      console.log(No);
    });

    this.service.getDataById(No).subscribe((recordsFound) => {
      console.log(recordsFound);
      this.emp = recordsFound;
      this.myid=this.emp.empId;
      console.log(this.emp);

    });
  }

  update() {
    console.log("in update()");
    console.log(this.emp);
    this.service.updateEmployee(this.emp).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/adminhome']);
    }, (error) => {
      console.log(error);
      this.router.navigate(['/adminhome']);
    })
   

  }

  CancelUpdate() {
    console.log("in CancelUpdate()");

    this.router.navigate(['/adminhome']);
  }
}
