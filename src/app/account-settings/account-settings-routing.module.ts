import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { AccountSettingsComponent } from './account-settings.component';
import { Layouts } from '../app.component'

const routes: Routes = [
  {
    path: 'account-settings', 
    component: AccountSettingsComponent,
    data: { layout: Layouts.Main }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSettingsRoutingModule { }
