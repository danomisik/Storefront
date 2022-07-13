import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule } from '@angular/material/select'; 
import { AppComponent } from './app.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CartComponent } from './components/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    ProductListComponent,
    ConfirmationComponent,
    CartComponent,
    NavigationComponent,
    PurchaseComponent,
    CartContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
