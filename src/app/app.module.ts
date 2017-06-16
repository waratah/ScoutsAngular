import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleNotificationsModule, NotificationComponent, MaxPipe, NotificationsService } from 'angular2-notifications';
import { ModalModule, TabsModule, AlertModule } from 'ngx-bootstrap';
//import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddressModule } from "app/address/address.module";
import { HomeModule } from "app/home/home.module";
import { ScoutsModule } from "app/scouts/scouts.module";
import { AccountingModule } from "app/Accounting/accounting.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    AlertModule,
    TabsModule.forRoot(),
    ModalModule,
    //InfiniteScrollModule,
    SimpleNotificationsModule,

    AddressModule,
    HomeModule,
    ScoutsModule,
    AccountingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
