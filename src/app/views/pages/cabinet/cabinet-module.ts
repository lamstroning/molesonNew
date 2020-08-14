import {NgModule} from '@angular/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {VerificationModule} from './verification/verification.module';

import {CommonModule} from '@angular/common';
import {CabinetComponent} from './cabinet.component';

import {WidgetModule} from '../../widget/widget.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
        WidgetModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  exports: [RouterModule],
  bootstrap: []
})


export class CabinetModule {
}
