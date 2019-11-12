import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LunchSpotsListComponent } from './lunch-spots-list/lunch-spots-list.component';
import { CourierLunchspotsComponent } from './courier-lunchspots/courier-lunchspots.component';

@NgModule({
  declarations: [
    AppComponent,
    LunchSpotsListComponent,
    CourierLunchspotsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
