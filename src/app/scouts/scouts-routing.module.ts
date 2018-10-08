import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoutDetailComponent } from './scout-detail/scout-detail.component';
import { EmailListComponent } from './email-list/email-list.component';
import { ScoutListComponent } from './scout-list/scout-list.component';
import { ScoutMenuComponent } from './scout-menu/scout-menu.component';

const routes: Routes = [
  { path: 'list/:scoutType', component: ScoutListComponent },
  { path: 'emails/:scoutType', component: EmailListComponent} ,
  { path: 'detail/:scoutId', component: ScoutDetailComponent },
  { path: 'detail', component: ScoutDetailComponent },
  { path: '', component: ScoutMenuComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoutsRoutingModule { }
