import { Injectable } from '@angular/core';
import {Products} from './productsdata/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsdataService {

  
  products : Products[] = [
    new Products(1, 'product 1', 'Redmi 8 (Blue, 64 GB) (4 GB RAM)',14000,
    "https://rukminim1.flixcart.com/image/312/312/k1fbmvk0/mobile/g/y/q/mi-redmi-8-mzb8253in-original-imafhyacjwjwxmsx.jpeg?q=70",1, 
    "10 % offer"),
    new Products(2, 'product 2', 'Redmi 9 (Black, 64 GB) (4 GB RAM)',20000,
    "https://rukminim1.flixcart.com/image/312/312/k8ddoy80/mobile/n/m/w/realme-narzo-10-rmx2040-original-imafqectbhfgxutg.jpeg?q=70",1,
    "7 % offer"),
    new Products(3, 'product 3', 'Real me pro (Blue, 64 GB) (8 GB RAM)',15000,
    "https://rukminim1.flixcart.com/image/312/312/k87nxjk0/mobile/m/f/k/redmi-note-8-pro-mzb8314in-original-imafqaf3mak86q8e.jpeg?q=70",1,
    "5 % offer"),
    new Products(4, 'product 4', 'Real me 9 (Blue, 64 GB) (4 GB RAM)',14000,
    "https://rukminim1.flixcart.com/image/312/312/k65d18w0/mobile/w/u/h/poco-x2-mzb9013in-original-imafzz2hdysz9njg.jpeg?q=70",1,
    "8 % offer"),
    new Products(5, 'product 5', 'Redmi 7 (Blue, 64 GB) (4 GB RAM)',12000,
    "https://rukminim1.flixcart.com/image/312/312/k1fbmvk0/mobile/g/y/q/mi-redmi-8-mzb8253in-original-imafhyacjwjwxmsx.jpeg?q=70",1,
    "9 % offer"),
    new Products(6, 'product 6', 'Redmi 10 (Blue, 64 GB) (8 GB RAM)',18000,
    "https://rukminim1.flixcart.com/image/312/312/k65d18w0/mobile/w/u/h/poco-x2-mzb9013in-original-imafzz2hdysz9njg.jpeg?q=70",1,
    "6 % offer")
  ]

  constructor() { }
  

  getProducts() : Products[]{
    return this.products;
  }
}
