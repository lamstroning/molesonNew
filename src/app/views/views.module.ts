
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewsComponent} from './views.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {InlineSVGModule} from 'ng-inline-svg';

import {FranchisesService} from '../core/franchises/franchises.service';
import {BlocksModule} from './blocks/blocks.module';
import {HeaderModule} from './blocks/header/header.module';
import {WidgetModule} from './widget/widget.module';

@NgModule({
  declarations: [
    ViewsComponent,
  ],
  imports: [
    HttpClientModule,
    InlineSVGModule.forRoot(),
    HeaderModule,
    BlocksModule,
    RouterModule,
    CommonModule,
    WidgetModule,
  ],
  providers: [FranchisesService],
  exports: [
    RouterModule
  ],
})


export class ViewsModule { }
