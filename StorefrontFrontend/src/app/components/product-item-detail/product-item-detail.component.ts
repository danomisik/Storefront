import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from "../../models/product";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product: Product = {
    id: 1,
    name: '',
    price: 0,
    url: '',
    description: ''
  };

  quantity: string = '1';


  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductById(this.activatedRoute.snapshot.params['id']).subscribe( product => {
      this.product = product;
    })
  }

  addProductToCart(){
    this.cartService.addProductToCart(this.product, this.quantity);
    alert("Added!")
  }

}
