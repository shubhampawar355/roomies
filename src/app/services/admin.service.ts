import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 // baseUrl = "http://localhost:8080/project1.1/admin/";
 baseUrl; 
  //= "http://localhost:8080/project1.1/validator/";

  constructor(private http:HttpClient) { 

    this.baseUrl = environment.url+'admin/';
    
  }
  updateEmployee(emp)
  {
    return this.http.post(this.baseUrl+"update",emp);
  }

  getData()
  {
    return this.http.get(this.baseUrl+"allemp");
  }

  delete(no)
  {
    return this.http.delete(this.baseUrl+"deleteemp/"+no);
   }


   getDataById(no)
   {
    console.log("in getbyid() of admin service")
    return this.http.get(this.baseUrl+"getemp/"+no);

   }
   
   registerEmployee(emp){
    return this.http.post(this.baseUrl+"addnewemp",emp);
   }
  }
