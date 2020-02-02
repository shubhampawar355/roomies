import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { Room } from '../../models/room.model';


@Component({
  selector: 'app-requestedroom',
  templateUrl: './requestedroom.component.html',
  styleUrls: ['./requestedroom.component.css']
})
export class RequestedroomComponent implements OnInit {
  
  public rooms:Room[] = new Array;
  public uid:number;

  m:boolean;



  constructor(private route: ActivatedRoute,
    private service: UserService,
    private router: Router) { 
      

    }

  ngOnInit() {
    this.uid=parseInt(localStorage.getItem("userid"));
    
    this.service.getAllMyRequests(this.uid).subscribe((res:any)=>{
      console.log(res);
      this.rooms=res;

      this.m = this.rooms.length!=0;


      console.log(this.rooms);
    },(err)=>{
      console.log(err);
    })
  }
  viewsCount(item){
    
  }
}
