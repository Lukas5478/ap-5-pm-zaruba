import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JokePrintPageRoutingModule } from './joke-print-routing.module';

import { JokePrintPage } from './joke-print.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JokePrintPageRoutingModule
  ],
  declarations: [JokePrintPage]
})
export class JokePrintPageModule {}
