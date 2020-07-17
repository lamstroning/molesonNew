import {NgModule} from '@angular/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {VerificationModule} from './verification/verification.module';

import {CommonModule} from '@angular/common';
import {CabinetComponent} from './cabinet.component';
import {Step2Component} from './verification/verification-steps/step2/step2.component';
import {Step4Component} from './verification/verification-steps/step4/step4.component';
import {Step1Component} from './verification/verification-steps/step1/step1.component';
import {Step5Component} from './verification/verification-steps/step5/step5.component';
import {Step3Component} from './verification/verification-steps/step3/step3.component';
import {VerificationComponent} from './verification/verification.component';
import {AppRoutingModule} from '../../../app-routing.module';
import {ViewsModule} from '../../views.module';
import {WidgetModule} from '../../widget/widget.module';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile'
      },
      {
        path: 'verification',
        loadChildren: () => import('./verification/verification.module').then(mod => mod.VerificationModule)
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    SettingsComponent,
    CabinetComponent
  ],

  imports: [
    RouterModule.forChild(routes),
    InlineSVGModule,
    CommonModule,
    WidgetModule
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: []
})


export class CabinetModule {
}
