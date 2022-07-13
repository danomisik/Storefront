import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let cart = this.cartService.getCart()
    if (cart.products.length > 0) {
      cart.fullName = this.fullName;
      cart.address = this.address;
      cart.creditCard = this.creditCard;
      cart.status = 'closed';
      this.cartService.updateCart(cart);
      this.router.navigate(['cart/confirmation']);
    } 
    else {
      alert("Cart is empty. We cannot finish your order.")
    }
  }

}
