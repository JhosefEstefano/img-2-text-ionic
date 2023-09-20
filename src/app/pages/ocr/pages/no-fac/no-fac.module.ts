import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoFacPageRoutingModule } from './no-fac-routing.module';

import { NoFacPage } from './no-fac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoFacPageRoutingModule
  ],
  declarations: [NoFacPage]
})
export class NoFacPageModule {}
