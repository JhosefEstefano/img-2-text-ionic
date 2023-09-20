import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoFacPage } from './no-fac.page';

const routes: Routes = [
  {
    path: '',
    component: NoFacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoFacPageRoutingModule {}
