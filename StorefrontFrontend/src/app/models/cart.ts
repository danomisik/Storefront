import { Product } from "./product";

export type CartProduct = {
    id?: number;
    quantity: string;
    product: Product
};

export type Cart = {
    id?: number;
    status: string;
    fullName?: string;
    address?: string;
    creditCard?: string;
    price: number;
    products: CartProduct[];
};