import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgCropperPage } from './img-cropper.page';

const routes: Routes = [
  {
    path: '',
    component: ImgCropperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgCropperPageRoutingModule {}
