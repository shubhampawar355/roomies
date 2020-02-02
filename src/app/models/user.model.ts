import { Gender } from './allenum.model';


export default class User{
    public userId:number;
    public name:string;
    public password: string;
    public confirmPassword: string;
    public email: string;
    public phoneNo: string;
	public gender: Gender;
    constructor()
    {
        this.name="";
        this.email="";
        this.password="";
        this.confirmPassword="";
        this.gender=Gender.MALE;
        this.phoneNo="";
    }

}

