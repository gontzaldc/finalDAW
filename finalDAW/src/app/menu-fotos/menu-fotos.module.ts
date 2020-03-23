import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuFotosPageRoutingModule } from './menu-fotos-routing.module';

import { MenuFotosPage } from './menu-fotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuFotosPageRoutingModule
  ],
  declarations: [MenuFotosPage]
})
export class MenuFotosPageModule {}
