import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {LandingComponent} from './landing.component';
import {ServicesComponent} from './services/services.component';
import {ContactComponent} from './contact/contact.component';
import {CompanyComponent} from './company/company.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
