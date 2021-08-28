import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ListHotelComponent } from './type/list-hotel/list-hotel.component';
import { ListRestaurantComponent } from './type/list-restaurant/list-restaurant.component';
import { ValidateProductsComponent } from './validate-products/validate-products.component';

const routes: Routes = [
  { path: 'restaurantes', component: ListRestaurantComponent },
  { path: 'hoteles', component: ListHotelComponent },
  { path: 'list', component: ProductsListComponent },
  { path: 'validate', component: ValidateProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
