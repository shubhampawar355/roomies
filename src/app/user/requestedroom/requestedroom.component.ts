import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-requestedroom',
  templateUrl: './requestedroom.component.html',
  styleUrls: ['./requestedroom.component.css']
})
export class RequestedroomComponent implements OnInit {
  
  public rooms:any;
  public uid:number;
  constructor(private route: ActivatedRoute,
    private service: UserService,
    private router: Router) { 

    }

  ngOnInit() {
    this.uid=parseInt(localStorage.getItem("userid"));
    
    this.service.getAllMyRequests(this.uid).subscribe((res)=>{
      console.log(res);
      this.rooms=res;
    },(err)=>{
      console.log(err);
    })
  }
  viewsCount(item){
    
  }
}
