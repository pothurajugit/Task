import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from '../productsdata.service';
import {Products} from '../productsdata/products';
import { CartdataService } from '../cartdata.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private productdervice: ProductsdataService, private cartdataservice: CartdataService) { }

  productslist : Products[] ;

  cartItems :any[] = [];

  ngOnInit(): void {
    this.productslist = this.productdervice.getProducts();
}

//Add to cart 
addtoCart(productobject){
   
  
    this.cartItems.push(productobject);

    this.cartdataservice.sendData(productobject);
}
}