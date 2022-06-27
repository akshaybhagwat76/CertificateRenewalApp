import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertRenewalComponent } from './cert-renewal/cert-renewal.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'profile',
    component: CertRenewalComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
