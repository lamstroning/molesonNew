import { NgModule } from '@angular/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {RouterModule} from '@angular/router';
import {VerificationComponent} from './verification/verification.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';

@NgModule({
  declarations: [
    VerificationComponent,
    ProfileComponent,
    SettingsComponent,
  ],

  imports: [
    InlineSVGModule,
    RouterModule,
  ],
  providers: [],
  exports: [

  ],
  bootstrap: []
})


export class NewsModule { }
