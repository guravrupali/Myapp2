import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable() //so that we can inject it wherever required
export class ProductService{
    parr=[new Product(10,"lays",40),
    new Product(11,"maggi",45),
    new Product(12,"oreo",30),
    new Product(13,"icecream",120)]

    getAllProduct():Product[]{
        return this.parr;
    }
    Addprod(p:Product)
    {
        this.parr.push(p);
    }
    UpdateProd(p:Product){
        for(let i=0;i<this.parr.length;i++)
        {
            if(this.parr[i].pid==p.pid)
            {
                this.parr[i].pname=p.pname;
                this.parr[i].price=p.price;
                break;
            }
        }
    }
    deleteProduct(p:Product){
        for(let i=0;i<this.parr.length;i++)
        {
            if(this.parr[i].pid==p.pid)
            {
                this.parr.splice(i,1);
                break;
            }
        }
    }
}