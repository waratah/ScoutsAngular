import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScoutsRoutingModule } from './scouts-routing.module';

import { EmailListComponent } from './email-list/email-list.component';
import { ScoutDetailComponent } from './scout-detail/scout-detail.component';
import { ScoutListComponent } from './scout-list/scout-list.component';
import { ScoutMenuComponent } from './scout-menu/scout-menu.component';
import { ScoutSectionComponent } from './scout-section/scout-section.component';

import { ScoutsService } from "app/scouts/services/scouts.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScoutsRoutingModule
  ],
  providers: [
    ScoutsService,
  ],

  declarations: [ScoutListComponent,
    EmailListComponent,
    ScoutDetailComponent,
    ScoutSectionComponent,
    ScoutMenuComponent
  ]
})
export class ScoutsModule { }
