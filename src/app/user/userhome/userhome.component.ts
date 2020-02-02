import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { Post } from '../../models/post.model'
import Filter from '../../models/filter.model';
import { Room } from '../../models/room.model';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  ngOnInit() {

  }
  
  public roomimages:Post[]=[
    
  ];

  public image: Post;
  public title = "R00MI's";
  public flag: boolean;
  public post: Post;
  public postList: Post;
  public rooms:any;
  public image2 = new Post;
  public userid:number;
  public user:any;
  public filter:any;
  public requested=true;
  public constructor(private route: ActivatedRoute,
    private service: UserService,
    private router: Router) {
    this.post = new Post();
    //SAMPLE IMAGE POST
    console.log("int ctor scroll/user");

    this.filter=new Filter();

    this.service.getallrooms().subscribe((res) => {
      console.log("in getallrooms()")
      this.rooms = res;
      console.log(this.rooms);
    }, (error) => {
      console.log(error)
    });
   // this.user=JSON.stringify(localStorage.getItem('currentuser'));
    this.userid=parseInt(localStorage.getItem("userid"));
    console.log("user details from ctor userhome");


  
    //SAMPLE IMAGE POST
    const samplePostImage = new Post;
    samplePostImage.postValue = 'assets/garden.jpg';

    const image2 = new Post;
    image2.postValue = 'assets/bedwithkid.jpeg';
    this.postList = samplePostImage;

console.log(this.rooms);

  }



  /**post text */
  public postText() {
    this.flag = false;
    // this.postList.push(this.post);//THIS METHOD ONLY ADD AT LAST POSITION
    //  this.postList.splice(0,0,this.post);//IT WILL AT 0TH (SPECIFIC POS)
    //RE INITILIZE -SO CHANGES DO NOT REFLECT IN PREVIOUS POSTS
    this.post = new Post();
  }


  public viewsCount(item: Post) {
    if(item.views==NaN)
    {
      item.views=1;
    }
    else{
      item.views += 1;

    }
  }

  public reportSpam(item: Post) {

    console.log("spamreport");
  }

  dofilter(){
    this.service.getroomsbyfilter(this.filter,this.userid).subscribe((res)=>{
      console.log(res);
       this.rooms=res;
     },(err)=>{
       console.log(err);
     }) 
     this.router.onSameUrlNavigation='reload';
  }

  requestRoom(room){

    
    this.requested=false;
    this.service.requestRoom(room,this.userid).subscribe((res)=>{
      console.log(res);
       this.rooms=res;

     },(err)=>{
       console.log(err);
     }) 
     this.ngOnInit();
    this.router.navigate(['/userhome']);
  }

}
