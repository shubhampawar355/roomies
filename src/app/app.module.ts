import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { EditComponent } from './admin/edit/edit.component';
import { ValidatorhomeComponent } from './validator/validatorhome/validatorhome.component';
import { ValidatoreditComponent } from './validator/validatoredit/validatoredit.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { PostroomComponent } from './user/postroom/postroom.component';
import { RegisteruserComponent } from './user/registeruser/registeruser.component';
import { RegisteremployeeComponent } from './admin/registeremployee/registeremployee.component';
import { LogoutComponent } from './common/logout/logout.component';
import { logging } from 'selenium-webdriver';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { ForgotpasswordComponent } from './common/forgotpassword/forgotpassword.component';
import { MyroomsComponent } from './user/myrooms/myrooms.component';
import { RequestedroomComponent } from './user/requestedroom/requestedroom.component';
import { ImageComponent } from './user/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminhomeComponent,
    EditComponent,
    ValidatorhomeComponent,
    ValidatoreditComponent,
    UserhomeComponent,
    PostroomComponent,
    RegisteruserComponent,
    RegisteremployeeComponent,
    LogoutComponent,
    AboutusComponent,
    ForgotpasswordComponent,
    MyroomsComponent,
    RequestedroomComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "",component:LoginComponent},

      {path: "home", component: HomeComponent},

      {path: "aboutus", component: AboutusComponent},

      {path: "login",component:LoginComponent},

      {path: "forgotpass",component:ForgotpasswordComponent },

      {path: "adminhome",component:AdminhomeComponent},

      {path: "adminedit/:empId",component:EditComponent},

      {path: "adminregister",component:RegisteremployeeComponent},

      {path: "validatorhome", component:ValidatorhomeComponent},

      {path: "validatoredit/:roomId", component:ValidatoreditComponent},

      {path: "userhome", component:UserhomeComponent},

      {path: "myrooms", component:MyroomsComponent},

      {path: "myrequests", component:RequestedroomComponent},

      {path: "postroom", component:PostroomComponent},

      {path: "registeruser", component:RegisteruserComponent},

      {path: "logout", component:LogoutComponent},

      {path: "image/:rid", component:ImageComponent}
      
    ],{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
