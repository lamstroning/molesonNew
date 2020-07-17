import {NgModule} from '@angular/core';
import {OperationsComponent} from './operations.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg';

const routes: Routes = [
  {
    path: '',
    component: OperationsComponent
  }
];

@NgModule ({
  declarations: [
    OperationsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    InlineSVGModule
  ]
})

export class OperationsModule {}
