import { Gender } from './allenum.model';

export default class Employee{
    public name:string;
    public password: string;
    public confirmpass: string;
    public email: string;
    public phone: string;
    public empId: number;
    public age:number;
	public gender: Gender;
    public role:string;
    public allocatedArea:string;
    public localadd:Address;
    public permadd:Address;
    public salary:number;
    public salarystatus:string;
    constructor()
    {
        
        
    }

}



export class Address
{
    public emp:Employee;
    public street:string;
    public city:string;
    public zip:string;

    constructor(){}
}