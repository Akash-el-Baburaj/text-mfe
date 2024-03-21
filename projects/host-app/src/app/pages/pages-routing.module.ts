import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroPageComponent } from './hero-page/hero-page.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ScreenModule } from '../../../../remote-app-1/src/app/screen/screen.module';
import { DashboardModule } from '../../../../remote-app-2/src/app/dashboard/dashboard.module';

const dashBoardURL = 'http://localhost:3400/remoteEntry.js'
const screenURL = 'http://localhost:3200/remoteEntry.js'

const routes: Routes = [
  { path: 'hero', component: HeroPageComponent },
  {
    path: 'dashboard',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: dashBoardURL,
        remoteName: 'remoteApp2',
        exposedModule: './dashboard'
      }).then(m => m.DashboardModule).catch(err => console.log('ERROR => ', err))
    }
  },
  {
    path: 'screen',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: screenURL,
        remoteName: 'remoteApp1',
        exposedModule: './screen'
      }).then(m => m.ScreenModule).catch(err => console.log('ERROR => ', err))
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
