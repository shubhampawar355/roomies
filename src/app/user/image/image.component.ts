import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute,
    private router:Router,private service:UserService) { }

  selectedfile:File=null;
  roomid:any;
  ngOnInit() {

    this.route.paramMap.subscribe((result)=>{
      this.roomid=parseInt(result.get("rid"));
      console.log(this.roomid);
   })

  }

  onfileselected(event){

    console.log(event);
  
    this.selectedfile=<File>event.target.files[0];
  
  }

  upload(){
    console.log("in upoload");
   
     const fd=new FormData();
    
     fd.append("image",this.selectedfile)

     console.log(fd);

     this.service.addImage(fd,this.roomid).subscribe((res)=>{
       console.log(res);
     },(err)=>{
       console.log(err);
     })

     this.router.navigate(['/userhome']);

  }

}
