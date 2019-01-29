import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import {LandingComponent} from './landing.component';
import { MainComponent } from './main/main.component';
import {HeaderComponent} from '../../shared/header/header.component';
import { ServicesComponent } from './services/services.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [LandingComponent, MainComponent, HeaderComponent, ServicesComponent, CompanyComponent, ContactComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
