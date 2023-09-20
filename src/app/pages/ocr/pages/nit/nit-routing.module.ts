import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NitPage } from './nit.page';

const routes: Routes = [
  {
    path: '',
    component: NitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NitPageRoutingModule {}
