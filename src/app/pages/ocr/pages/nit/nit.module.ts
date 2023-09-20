import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NitPageRoutingModule } from './nit-routing.module';

import { NitPage } from './nit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NitPageRoutingModule
  ],
  declarations: [NitPage]
})
export class NitPageModule {}
