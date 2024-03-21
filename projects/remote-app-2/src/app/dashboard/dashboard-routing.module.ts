import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyseComponent } from './analyse/analyse.component';

const routes: Routes = [
  { path: '', redirectTo: 'analyse', pathMatch: 'full' },
  { path: 'analyse', component: AnalyseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
