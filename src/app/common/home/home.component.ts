import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  title = 'R00M!ES';
  user:any;
  flag:any;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.currentuser);
    this.flag = localStorage.flag;
    console.log(this.user);
    console.log(this.flag);
  }

}
