import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevelopmentComponent } from './components/development/development.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';

const routes: Routes = [
  { path:'development/:type', component:DevelopmentComponent },
  { path:'development/:type/details/:item', component:WorkDetailsComponent },
  { path:'**', redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
