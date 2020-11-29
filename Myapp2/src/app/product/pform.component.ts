import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector:"pform",
    templateUrl:"./pform.component.html",
    styleUrls:["./pform.component.css"]
})
export class PformComponent{
    constructor(private pservice:ProductService){
           
    }
    pid:number;
    pname:string;
    price:number;

    @Input("upprod")
    prod:Product; //here data is coming form ptab html which is from ptab ts
    @Output()
    myevent=new EventEmitter();
    //this gets called every time any @Input property changes
    ngOnChanges(change:SimpleChanges){
        console.log(change);
        if(change["prod"].currentValue!=change["prod"].previousValue)
        {
            this.pid=this.prod.pid;
            this.pname=this.prod.pname;
            this.price=this.prod.price;
        }
    }
    addProduct(){
        let p=new Product(this.pid,this.pname,this.price);
       console.log(p);
       this.pservice.Addprod(p); //send product to service addprod method
       //after adding clear form so
        this.pid=0;
        this.pname="";
        this.price=0;
        this.myevent.emit(false);
   }
   updateProduct(){
       let p=new Product(this.pid,this.pname,this.price);
       console.log(p);
       this.pservice.UpdateProd(p);
       this.pid=0;
       this.pname="";
       this.price=0;
       this.myevent.emit(false);
   }
}