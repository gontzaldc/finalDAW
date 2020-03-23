import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformazioaPageRoutingModule } from './informazioa-routing.module';

import { InformazioaPage } from './informazioa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformazioaPageRoutingModule
  ],
  declarations: [InformazioaPage]
})
export class InformazioaPageModule {}
