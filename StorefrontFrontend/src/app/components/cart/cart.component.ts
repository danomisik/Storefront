import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = {
    status: 'active',
    price: 0,
    products: []
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  updatePrice(){
    this.cart.price = 0;
    for (let cartProduct of this.cart.products) {
      this.cart.price = this.cart.price + Number(cartProduct.quantity)*Number(cartProduct.product.price);
    }
    this.cartService.updateCart(this.cart);
  }

  onRemove(productId: number) {
    this.cart.products = this.cart.products.filter(({ product }) => product.id !== productId);
    this.updatePrice();
  }

}