import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {LandingComponent} from './landing.component';
import {ServicesComponent} from './services/services.component';
import {ContactComponent} from './contact/contact.component';
import {CompanyComponent} from './company/company.component';
import {AboutComponent} from './about/about.component';
import {TeamComponent} from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'main',
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'company',
        component: CompanyComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'team',
        component: TeamComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
