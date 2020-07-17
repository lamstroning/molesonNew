import { NgModule } from '@angular/core';
import {InlineSVGModule} from 'ng-inline-svg';
import { RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        component: AuthComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    AuthComponent
  ],

  imports: [
    InlineSVGModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: []
})


export class AuthModule { }
