

    export default class Filter{
       private minBudget:Number;
       private maxBudget:Number;
       private minRoomCount:Number;
       private maxRoomCount:Number;
       private minSharingCount:Number;
       private maxSharingCount:Number;
       private type:any;

       constructor()
       {
           this.minBudget=0;
           this.maxBudget=10000;
           this.minRoomCount=1;
           this.maxRoomCount=15;
           this.minSharingCount=1;
           this.maxSharingCount=15;
           this.type="ONEBHK";
       }
    }