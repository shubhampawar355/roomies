import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ValidatorService } from '../../services/validator.service';
import { UserService } from '../../services/user.service';
import { ValidateStatus } from '../../models/allenum.model';

@Component({
  selector: 'app-validatoredit',
  templateUrl: './validatoredit.component.html',
  styleUrls: ['./validatoredit.component.css']
})
export class ValidatoreditComponent implements OnInit {

  owner:any;
  room:any;
  add:any;
  roomid:number;
  
  constructor(private route: ActivatedRoute, 
    private service: ValidatorService,
       private router: Router,
       private userservice:UserService) {


 //   this.room.owner=this.owner;
   // this.room.location=this.add;
    //this.room.validateStatus=ValidateStatus.NONE;
        }

  ngOnInit() {
    debugger;
    this.route.paramMap.subscribe((result)=>{
       this.roomid=parseInt(result.get("roomId"));
       console.log(this.roomid);
    })
    
    this.userservice.getUser(this.roomid).subscribe((res)=>{
      this.owner=res;
      console.log(res);
    },(err)=>{
      console.log(err);
    })
    debugger;

    this.service.getRoom(this.roomid).subscribe((res) => {
      console.log("in getroom()");
      console.log(res);
      this.room=res;
     // this.router.navigate(['/admin/edit']);
    }, (error) => {
      console.log(error)
    })
  }

  postRoom(){
    console.log(this.room);
    this.service.updateRoom(this.room).subscribe((res) => {
      console.log("in postRoom()");
      console.log(res);
     // this.router.navigate(['/validator']); //navigate to list page ramainning
    }, (error) => {
      console.log(error)
    })
  }

  delete(){
    this.service.deleteRoom(this.room);
    //navigate to list page ramainning
  }

  CancelPost()
  {
    this.router.navigate(['/validatorhome']);
  }
}
