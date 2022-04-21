import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditRestPageRoutingModule } from './edit-rest-routing.module';

import { EditRestPage } from './edit-rest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRestPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditRestPage]
})
export class EditRestPageModule {}
