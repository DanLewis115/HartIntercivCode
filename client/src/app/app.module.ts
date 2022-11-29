import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CountdownModule } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
