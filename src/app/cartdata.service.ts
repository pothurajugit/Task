import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Products } from './productsdata/products';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {
  
  orderitems:any[] = [];


  constructor(){}

//orders data
  sendData(orderdata){
  let productExists = false;
        for(let i in this.orderitems){
        if(this.orderitems[i].id == orderdata.id){
          this.orderitems[i].quantity ++;
          productExists = true;
          break; 
        }
      }
          if(!productExists){
      this.orderitems.push(orderdata);
    }
}
}
