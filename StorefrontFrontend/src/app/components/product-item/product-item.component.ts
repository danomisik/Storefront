import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../../models/product";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Output() added = new EventEmitter<{product: Product, quantity: string}>();
  @Input() product: Product;

  quantity: string = '1';

  constructor(private cartService: CartService) { 
    this.product = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

}
