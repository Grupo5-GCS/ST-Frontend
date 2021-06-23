import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelRestauranteComponent } from './shared/hotel-restaurante/hotel-restaurante.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelRestauranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
