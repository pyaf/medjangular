import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule  } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { OrderModule } from 'ngx-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { DatePipe } from '@angular/common';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { ProductService } from './services/product.service';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CookieService } from 'ngx-cookie-service';
import { TablesComponent } from './components/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TablesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    OrderModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    NgxPaginationModule,
    MyDatePickerModule
    // DatePickerModule,
  ],
  providers: [
    ProductService,
    CookieService,
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }


/*
Take note of the AppModule within app.module.ts. This is used to bootstrap the Angular app.
The @NgModule decorator takes metadata that lets Angular know how to run the app.
Everything that we create in this tutorial will be added to this object.
 */
