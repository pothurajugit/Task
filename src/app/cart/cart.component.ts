import { Component, OnInit } from '@angular/core';
import { CartdataService } from '../cartdata.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private datafromservice: CartdataService) { }

  allorders:any;
  cartTotal:any = 0;
  removeItems:any[] = [];
  ngOnInit(){

    //subscribe 
    // this.datafromservice.getData().subscribe((productdata) =>{
    //   console.log(productdata);
    // });


    this.allorders = this.datafromservice.orderitems;
    //console.log(this.allorders);
    
    //Total price
    this.allorders.forEach(item => {
      this.cartTotal = this.cartTotal +(item.quantity * item.price)
    });
    //console.log(this.cartTotal);
    }

    

    //Add
    add(item){
      //console.log(item);
      item.quantity ++;

      this.cartTotal = this.cartTotal + item.price;
    }

    //remove
    remove(item){
      if(item.quantity == 0){
        alert('Item is empty');
        return false;
      }
      item.quantity --;
      this.cartTotal = this.cartTotal - item.price;
    }
  }


