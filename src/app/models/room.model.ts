import User from './user.model';
import { VisiblityStatus ,ValidateStatus } from './allenum.model';
import Employee from './employee.model';

export class Room{
   public roomId:number;
   public city: string;
   public location:Address;
   public description: string;
   public landmark: string;
   public rent: number;
   public visiblityStatus:VisiblityStatus;
   public validateStatus:ValidateStatus;
   public owner:User;
   public requests:any;
   public type: string;
   public roomCount: number;
   public sharingCount: number;
   public postDate:string;
   public image:File=null;
}


export default class Address
{
    public emp:Employee;
    public street:string;
    public city:string;
    public zip:string;

    constructor(){}
}