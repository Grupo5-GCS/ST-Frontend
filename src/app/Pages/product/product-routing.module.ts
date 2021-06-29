import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHotelComponent } from './type/list-hotel/list-hotel.component';
import { ListRestaurantComponent } from './type/list-restaurant/list-restaurant.component';

const routes: Routes = [
  { path: 'restaurantes', component: ListRestaurantComponent },
  { path: 'hoteles', component: ListHotelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
