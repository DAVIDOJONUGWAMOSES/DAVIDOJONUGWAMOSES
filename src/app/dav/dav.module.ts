import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DavRoutingModule } from './dav-routing.module';
import { DavComponent } from './dav.component';


@NgModule({
  declarations: [DavComponent],
  imports: [
    CommonModule,
    DavRoutingModule
  ]
})
export class DavModule { }
