import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { ScoutsModule } from "app/scouts/scouts.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    ScoutsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
