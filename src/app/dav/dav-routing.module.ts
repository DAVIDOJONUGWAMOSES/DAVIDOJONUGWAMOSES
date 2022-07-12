import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DavComponent } from './dav.component';

const routes: Routes = [{ path: '', component: DavComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DavRoutingModule { }
