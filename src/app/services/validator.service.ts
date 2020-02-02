import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room.model'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  baseUrl; 
  //= "http://localhost:8080/project1.1/validator/";

  constructor(private http:HttpClient) { 

    this.baseUrl = environment.url+'validator/';
    
  }

  getallrooms(vid)
  {
    return this.http.get(this.baseUrl+"getallrooms/"+vid);
  }

  getRoom(roomid)
  {
    return this.http.get(this.baseUrl+"getroombyid/"+roomid)
  }
  updateRoom(room)
  {
    return this.http.post(this.baseUrl+"validateroom",room);

  }

  deleteRoom(room:Room) {
    return this.http.post(this.baseUrl+"deleteroom",room);
  }
  deleteRoombyid(rid:number){
    return this.http.get(this.baseUrl+"getroombyid/"+rid);
  }
}
