import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingModule} from './component/landing/landing.module';
import {AuthModule} from './component/auth/auth.module';
import {AdminPanelModule} from './component/admin-panel/admin-panel.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => LandingModule
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: 'admin',
    loadChildren: () => AdminPanelModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
