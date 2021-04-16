import { CustomerAddress } from "./customer-address.model";
import { CustomerName } from "./customer-name.model";
import { UserCartOrders } from "./user-cart-orders.model";

export interface User {
    id: number,
    name: CustomerName,
    phone: string,
    avatar: string,
    email: string,
    address: CustomerAddress,
    orders: UserCartOrders,
    role: 'ADMIN' | 'CUSTOMER' // Role is based on i % 2
}