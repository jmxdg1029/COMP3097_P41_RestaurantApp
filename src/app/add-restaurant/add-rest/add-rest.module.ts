import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRestPageRoutingModule } from './add-rest-routing.module';

import { AddRestPage } from './add-rest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRestPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddRestPage]
})
export class AddRestPageModule {}
