import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ValidateProductsComponent } from './validate-products/validate-products.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ResultProductsComponent } from './result-products/result-products.component';


@NgModule({
  declarations: [
    ValidateProductsComponent, FormProductComponent, ProductDetailComponent, ProductsListComponent,
    ResultProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
