import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminPanelRoutingModule} from './admin-panel-routing.module';
import {AdminPanelComponent} from './admin-panel.component';
import {FinanceComponent} from './finance/finance.component';
import {PagesComponent} from './pages/pages.component';
import {UsersComponent} from './users/users.component';
import {EmployeesComponent} from './employees/employees.component';
import {HeaderAdminComponent} from '../../shared/header-admin/header-admin.component';

@NgModule({
  declarations: [HeaderAdminComponent, AdminPanelComponent, FinanceComponent, PagesComponent, UsersComponent, EmployeesComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ]
})
export class AdminPanelModule {
}
