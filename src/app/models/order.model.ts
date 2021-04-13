import { CartProduct } from "./cart-product.model";

export interface CartOrders {
    id: number, // user id
    products: CartProduct[],
}