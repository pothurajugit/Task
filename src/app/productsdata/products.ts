import { AppRoutingModule } from '../app-routing.module';

export class Products {
    id: number;
    name: string;
    description: string;
    price: number;
    imgurl : string;
    quantity: number;
    offer: string;
    total: number;

    constructor(id , name, description = '', price = 0, imgurl,quantity,offer){
        this.id = id ;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgurl = imgurl;
        this.quantity = quantity;
        this.offer = offer;
    }
}
