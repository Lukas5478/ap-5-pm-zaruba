import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokePrintPage } from './joke-print.page';

const routes: Routes = [
  {
    path: '',
    component: JokePrintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JokePrintPageRoutingModule {}
