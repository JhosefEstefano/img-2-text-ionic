import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgCropperPageRoutingModule } from './img-cropper-routing.module';

import { ImgCropperPage } from './img-cropper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgCropperPageRoutingModule
  ],
  declarations: [ImgCropperPage]
})
export class ImgCropperPageModule {}
