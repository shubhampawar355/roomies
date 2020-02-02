import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  public user=new User();
  constructor(private route: ActivatedRoute, 
               private service: UserService,
                  private router: Router) { 

                  }

  ngOnInit() {

  }


  register(){
    this.service.registerUser(this.user).subscribe((res) => {
      console.log("register()")
      console.log(res);
    }, (error) => {
      console.log(error)
    })

    this.router.navigate(['/login']);

  }
  goHome()
  {
    this.router.navigate(['/home']);
  }
}
