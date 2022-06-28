import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GermanPageRoutingModule } from './german-routing.module';

import { GermanPage } from './german.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GermanPageRoutingModule
  ],
  declarations: [GermanPage]
})
export class GermanPageModule {}
