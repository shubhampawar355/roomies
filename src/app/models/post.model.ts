import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Post{
    public postType: string;
    public postValue: string;

    public views: number;
    public requests: number;
    public constructor(){
        //DEFAULT ASSUMPTION
        this.postType='IMAGE';
        this.postValue='';

        this.views=0;
        this.requests=0;
    }
}
