import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcrPage } from './ocr.page';

const routes: Routes = [
  {
    path: '',
    component: OcrPage
  },
  {
    path: 'nit',
    loadChildren: () => import('./pages/nit/nit.module').then( m => m.NitPageModule)
  },
  {
    path: 'no-fac',
    loadChildren: () => import('./pages/no-fac/no-fac.module').then( m => m.NoFacPageModule)
  },
  {
    path: 'total',
    loadChildren: () => import('./pages/total/total.module').then( m => m.TotalPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcrPageRoutingModule {}
