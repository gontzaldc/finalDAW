import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuFotosPage } from './menu-fotos.page';

const routes: Routes = [
  {
    path: '',
    component: MenuFotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuFotosPageRoutingModule {}
