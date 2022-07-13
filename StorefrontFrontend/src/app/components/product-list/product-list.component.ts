import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe( data => {
      this.productList = data;
    })
  }

  addProductToCart(cartProduct: CartProduct){
    this.cartService.addProductToCart(cartProduct.product, cartProduct.quantity);
    alert("Added!")
  }

}
