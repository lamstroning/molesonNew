import { NgModule } from '@angular/core';
import {ProfileComponent} from './header-elements/profile/profile.component';
import {HeaderComponent} from './header.component';
import {InlineSVGModule} from 'ng-inline-svg';

import {LangComponent} from './header-elements/lang/lang.component';
import {CommonModule} from '@angular/common';
import {BlocksModule} from '../blocks.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    // HeaderComponent,
    // ProfileComponent,
    // LangComponent,

  ],
  imports: [
    CommonModule,
    InlineSVGModule.forRoot(),
  //   RouterModule,
  ],
  providers: [],
    exports: [
        // HeaderComponent,

    ],
  bootstrap: []
})


export class HeaderModule { }
