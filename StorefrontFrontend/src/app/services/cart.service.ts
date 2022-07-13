import { Injectable } from '@angular/core';
import { Cart, CartProduct } from "../models/cart";
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = {
    status: 'active',
    price: 0,
    products: []
  };

  constructor() { }



  //TODO: Connect service with Backend
  getCart() {
    return this.cart;
  }

  //TODO: Connect service with Backend
  addProductToCart(product: Product, quantity: string) {
    let cartProduct: CartProduct = {
      quantity: quantity,
      product: product
    }
    this.cart.products.push(cartProduct)
    this.cart.price = this.cart.price + Number(quantity)*product.price
    return this.cart;
  }

  //TODO: Connect service with Backend
  updateCart(cart: Cart) {
    this.cart = cart;
    return this.cart;
  }

  clearCart() {
    this.cart = {
      status: 'active',
      price: 0,
      products: []
    };
  }
}
