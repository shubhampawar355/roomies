import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Role } from '../models/allenum.model';
import { environment } from '../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  user: any;
 // url = 'http://localhost:8080/project1.1/login/validate';
 url; 
 //= "http://localhost:8080/project1.1/validator/";

 constructor(private http:HttpClient,private router: Router) { 

   this.url = environment.url+'login/validate';
   
 }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.IsLoggedIn()) {
      console.log('User Has Logged in');
      return true;
    } else {
      console.log('User Has not Logged in');
      this.router.navigate(['/login']);
      return false;
    }
  }

  IsLoggedIn() {
    if (window.sessionStorage.getItem('isActive') !== null
      &&
      window.sessionStorage.getItem('isActive') === '1') {
      return true;
    } else {
      return false;
    }
  }

  CheckCredentialsWithDB(credentials) {
    const obersvableResult = this.http.post(this.url, credentials);
    obersvableResult.subscribe(result => {
      this.user = result;
      debugger;
      console.log(this.user);
      if (this.user) {
        window.sessionStorage.setItem('isActive', '1');
        localStorage.setItem('currentuser', JSON.stringify(this.user));
        localStorage.setItem('flag', 'true');
        if (this.user.role == "ADMIN") {
          localStorage.setItem("userid",this.user.empId);

          this.router.navigate(['adminhome']);

        }
        else {
          if (this.user.role == "VALIDATOR") {
            localStorage.setItem("userid",this.user.empId);

            this.router.navigate(['validatorhome']);

          } else {
            localStorage.setItem("userid",this.user.userId);
            this.router.navigate(['userhome']);

          }
        }
      }
      else {
        console.log("hi");
        return false;
      }
    });
  }

  Logout() {
    window.sessionStorage.setItem('isActive', '0');
    this.router.navigate(['/login']);
    localStorage.removeItem('isActive');
    localStorage.removeItem('currentuser');
    sessionStorage.removeItem('isActive');
    sessionStorage.removeItem('userid');
    localStorage.clear();
  }


}
