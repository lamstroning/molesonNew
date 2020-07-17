import { NgModule } from '@angular/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {VerificationModule} from './verification/verification.module';
import {CabinetComponent} from './cabinet.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ProfileComponent,
    SettingsComponent,
  ],

  imports: [
    InlineSVGModule,
    RouterModule,
    VerificationModule,
    CommonModule
  ],
  providers: [],
  exports: [

  ],
  bootstrap: []
})


export class CabinetModule { }
