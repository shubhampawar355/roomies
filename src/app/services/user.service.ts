import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl; 
  //= "http://localhost:8080/project1.1/validator/";

  constructor(private http:HttpClient) { 

    this.baseUrl = environment.url+'user/';
    
  }

registerUser(form){
  console.log("in userdata ");
  console.log(form);
  return this.http.post(this.baseUrl+"adduser",form)
}

  getallrooms()
  {
    return this.http.get(this.baseUrl+"getallrooms");
  }

  requestRoom(room,uid){
 //   var str= this.baseUrl+"requestroom/"+2;
    console.log(uid, room);
    return this.http.post(this.baseUrl+"requestroom/"+uid,room);

  }

  postRoom(room,uid)
{
  console.log("in postRoom() of service")
  console.log(room);
  console.log(uid);
 return this.http.post(this.baseUrl+"postroom/"+uid,room);
}

getUser(uid){
  return this.http.get(this.baseUrl+"getuser/"+uid);
}

getroomsbyfilter(filter,uid){
  console.log(filter);
  console.log(uid);
  return this.http.post(this.baseUrl+"getroomsbyfilter/"+uid,filter);
}

getmyrooms(uid){
return this.http.get(this.baseUrl+"getmyrooms/"+uid)
}

allrequestsforroom(rid)
{
  return this.http.get(this.baseUrl+"allrequestsforroom/"+rid);
}


getAllMyRequests(uid){
  console.log("in getAllMyRequests");
  return this.http.get(this.baseUrl+"getallmyrequests/"+uid);
}

addImage(fd,rid){
  return this.http.post(this.baseUrl+"addimage/"+rid,fd);
}

removeroom(room,uid){
  return this.http.post(this.baseUrl+"/deleteroom/"+uid,room);
}

}
