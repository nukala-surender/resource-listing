import { Component, OnInit } from '@angular/core';
import {Resource} from '../resourceadd/resource.model';
import { CommonService } from '../app/services/common.service';
import {ResourceFilter} from '../filter/resource';

@Component({
  selector: 'app-resourcelist',
  templateUrl: './resourcelist.component.html',
  styleUrls: ['./resourcelist.component.css']
})
export class ResourcelistComponent implements OnInit {



  private groceryList:Resource[]
  private items:ResourceFilter[]

	constructor(private commonService:CommonService){
    this.items=[]
  }


	ngOnInit(){

    this.getAllGrocery()

		this.commonService.add_subject.subscribe(response => {
            this.getAllGrocery()
    })
}
  getAllGrocery(){
        this.commonService.getGrocery().subscribe(res =>{
            this.groceryList  = []
            res.json().data.map(e => {
                this.groceryList.push(new Resource(e.title,e.path,e.desc,e.item4));
            })
        })
    }

}
