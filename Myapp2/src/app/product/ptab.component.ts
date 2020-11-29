import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector:"ptab",
    templateUrl:"./ptab.component.html",
    styleUrls:["./ptab.component.css"]
})
export class PtabComponent {
   parr:Product[];
   pob:Product;
   flag=false;
    constructor(private pservice:ProductService){

    }
    ngOnInit(){
        console.log("ptab constr called..");
        this.parr=this.pservice.getAllProduct(); //gives us product array
    }
    
    displayForm(){
        this.flag=true;
        console.log(this.flag);
    }
    updateProduct(p:Product){
        this.flag=true; //To show form
        this.pob=p;
    }
    deleteProduct(p:Product){
        this.pservice.deleteProduct(p);
    }
}