import { Component, OnInit } from '@angular/core';
import { Address } from '../../models/employee.model';
import { Room } from '../../models/room.model';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import User from '../../models/user.model';
import { ValidateStatus } from '../../models/allenum.model';

@Component({
  selector: 'app-postroom',
  templateUrl: './postroom.component.html',
  styleUrls: ['./postroom.component.css']
})
export class PostroomComponent implements OnInit {
  owner: any;
  room: Room;
  add: Address;
  result:any;

  constructor(private route: ActivatedRoute,
    private service: UserService,
    private router: Router) {
    this.owner = JSON.parse(localStorage.getItem("currentuser"));

  }

  ngOnInit() {

    this.room = new Room();
    this.add = new Address();

    this.room.location = this.add;
    this.room.validateStatus = ValidateStatus.NONE;

  }

  postRoom() {
    console.log(this.room);
    this.room.city = this.add.city;
    this.service.postRoom(this.room, this.owner.userId).subscribe((res) => {
      console.log("in postRoom()");
    this.result=res;  
    console.log(this.result.roomId)   
    this.router.navigate(['/image/'+this.result.roomId]);
    }, (error) => {
      console.log(error)
    })
  }
  upload(event) {
    this.room.image = <File>event.target.files[0];
  }

  CancelPost() {
    this.router.navigate(['/userhome']);
  }

}
