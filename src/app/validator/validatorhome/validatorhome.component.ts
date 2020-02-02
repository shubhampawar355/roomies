import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-validatorhome',
  templateUrl: './validatorhome.component.html',
  styleUrls: ['./validatorhome.component.css']
})
export class ValidatorhomeComponent implements OnInit {

  roomlist: any=[];

  validator: any;
  ownerlist:any[]=[];
  public empId:number;
  constructor(private route: ActivatedRoute,
    private service: ValidatorService,
    private router: Router) {
      //this.validator=new Employee();

debugger;
this.empId=parseInt(localStorage.getItem("userid"))

      this.getRooms(this.empId);
      console.log("somethig"+this.ownerlist);
  }

  getRooms(vid){
    this.service.getallrooms(vid).subscribe((res) => {
     // console.log("in getRooms()")
      console.log(res);
      this.roomlist = res;
//      console.log(this.roomlist);
    }, (error) => {
      console.log(error)
    });

  }


  deleteRoom(room)
  {
    this.service.deleteRoom(room).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    })
  }

  ngOnInit() {
    
  }
}
