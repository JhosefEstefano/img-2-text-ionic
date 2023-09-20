import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgCropperPageRoutingModule } from './img-cropper-routing.module';

import { ImgCropperPage } from './img-cropper.page';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgCropperPageRoutingModule,
    ImageCropperModule
  ],
  declarations: [ImgCropperPage]
})
export class ImgCropperPageModule {}
