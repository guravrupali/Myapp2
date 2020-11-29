import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector:"plist",
    templateUrl:"./plist.component.html",
    styleUrls:["./plist.component.css"]
})
export class PlistComponent implements OnInit{
    parr:Product[];
   constructor(private pservice:ProductService){
        console.log("plist constructor called");                        //so now here when constructor get called parr get 
                                //automatically inject here
   }
   ngOnInit(){ //avaiable in interface OnInit
       console.log("ngInit called...");
       this.parr=this.pservice.getAllProduct(); //gives all product from service
   }
}