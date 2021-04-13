import { CustomerAddress } from "./customer-address.model";
import { CustomerName } from "./name.model";
import { CartOrders } from "./order.model";

export interface User {
    id: number,
    name: CustomerName,
    phone: string,
    avatar: string,
    email: string,
    address: CustomerAddress,
    orders: CartOrders,
    role: 'ADMIN' | 'CUSTOMER' // Role is based on i % 2
}