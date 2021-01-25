import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,
    FilterComponent,CardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
