import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoutDetailComponent } from "app/scouts/scout-detail/scout-detail.component";
import { ScoutListComponent } from "app/scouts/scout-list/scout-list.component";
import { ScoutMenuComponent } from "app/scouts/scout-menu/scout-menu.component";
import { EmailListComponent } from "app/scouts/email-list/email-list.component";

const routes: Routes = [{
  path: 'list/:scoutType',
  component: ScoutListComponent
}, {
  path: 'emails/:scoutType',
  component: EmailListComponent
}, {
  path: 'detail/:scoutId',
  component: ScoutDetailComponent
},
{
  path: 'detail',
  component: ScoutDetailComponent
},
{
  path: '',
  component: ScoutMenuComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoutsRoutingModule { }
