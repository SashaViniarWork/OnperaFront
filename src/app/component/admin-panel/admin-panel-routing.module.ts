import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component';
import {FinanceComponent} from './finance/finance.component';
import {PagesComponent} from './pages/pages.component';
import {UsersComponent} from './users/users.component';
import {EmployeesComponent} from './employees/employees.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      {
        path: '',
        redirectTo: 'finance',
      },
      {
        path: 'finance',
        component: FinanceComponent
      },
      {
        path: 'pages',
        component: PagesComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'employees',
        component: EmployeesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
