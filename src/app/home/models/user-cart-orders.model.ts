import { CartProduct } from "./cart-product.model";

export class UserCartOrders {
    id: number; // user id
    products: CartProduct[] = [];

    constructor(id?: number, products?: CartProduct[]) {
        this.id = id ? id : this.id;
        this.products = products ? products : this.products;
    }
}