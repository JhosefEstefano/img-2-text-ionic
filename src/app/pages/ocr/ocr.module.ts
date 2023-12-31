import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcrPageRoutingModule } from './ocr-routing.module';

import { OcrPage } from './ocr.page';

import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ImageCropperModule,
    OcrPageRoutingModule
  ],
  declarations: [OcrPage]
})
export class OcrPageModule {}
