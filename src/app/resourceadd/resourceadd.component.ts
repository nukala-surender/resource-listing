import { Component, OnInit } from '@angular/core';
import { CommonService } from '../app/services/common.service';

@Component({
  selector: 'app-resourceadd',
  templateUrl: './resourceadd.component.html',
  styleUrls: ['./resourceadd.component.css']
})
export class ResourceaddComponent implements OnInit {

      private resource1
      private groceryItem2
      private groceryItem3

    constructor(private commonService:CommonService) {

    }

  addGrocery(){
            console.log('------ inside add -------')
            console.log(this.resource1)
            this.commonService.addGrocery(this.resource1,this.groceryItem2,this.groceryItem3).subscribe(res => {
            this.commonService.add_subject.next()
            console.log('------ afer add -------')

            this.resource1='';
            this.groceryItem2='';
            this.groceryItem3='';
            console.log(this.resource1)
        })
    }

  ngOnInit() {

  }

}
