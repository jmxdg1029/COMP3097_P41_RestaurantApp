import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRestPage } from './add-rest.page';

const routes: Routes = [
  {
    path: '',
    component: AddRestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRestPageRoutingModule {}
