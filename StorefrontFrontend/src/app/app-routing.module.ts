import { NgModule } from '@angular/core';
import { CartContainerComponent } from "./components/cart-container/cart-container.component";
import { ConfirmationComponent } from "./components/confirmation/confirmation.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductItemDetailComponent } from "./components/product-item-detail/product-item-detail.component";
import {Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartContainerComponent },
  { path: 'products/:id', component: ProductItemDetailComponent },
  { path: 'cart/confirmation', component: ConfirmationComponent },
  { path: '**', redirectTo: '/'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
