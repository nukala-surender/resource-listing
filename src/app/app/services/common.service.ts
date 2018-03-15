import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Resource} from '../../resourceadd/resource.model';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class CommonService {

   public groceryList: Resource[]
    public add_subject=new Subject()

  constructor(private http:Http) {
            this.groceryList = []
   }
addGrocery(item1, item2, item3){
        return this.http.post('/api/addResource',{
        groceryItem1 : item1,
        groceryItem2 : item2,
        groceryItem3 : item3
    })
    }

getGrocery(){
		return this.http.get('/api/getResource',{})
}

}
