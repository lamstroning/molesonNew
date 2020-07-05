import { NgModule } from '@angular/core';
import {HeaderModule} from './header/header.module';
import {AsideComponent} from './aside/aside.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {ViewsComponent} from '../views.component';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {MyWalletComponent} from '../pages/my-wallet/my-wallet.component';
import {FranchisesComponent} from '../pages/franchises/franchises.component';
import {NewsComponent} from '../pages/news/news.component';
import {PartnersComponent} from '../pages/partners/partners.component';
import {DocsComponent} from '../pages/docs/docs.component';
import {HelpComponent} from '../pages/help/help.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {CommonModule} from '@angular/common';
import {WalletComponent} from './header/header-elements/wallet/wallet.component';
import {AnalyticsComponent} from '../pages/analytics/analytics.component';
import {OperationsComponent} from '../pages/operations/operations.component';
import {NewsDetailComponent} from '../pages/news/news-detail/news-detail.component';
import {FranchisesDetailComponent} from '../pages/franchises/franchises-detail/franchises-detail.component';
import {CabinetComponent} from '../pages/auth/cabinet/cabinet.component';
import {VerificationComponent} from '../pages/auth/cabinet/verification/verification.component';
import {ProfileComponent} from '../pages/auth/cabinet/profile/profile.component';
import {SettingsComponent} from '../pages/auth/cabinet/settings/settings.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full',
          },
          {
            path: 'analytics',
            component: AnalyticsComponent
          },
          {
            path: 'operations',
            component: OperationsComponent
          }
        ]
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'my-wallet',
        component: MyWalletComponent
      },
      {
        path: 'franchises',
        component: FranchisesComponent
      },
      {
        path: 'franchises-detail/:id',
        component: FranchisesDetailComponent
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'news-detail/:id',
        component: NewsDetailComponent
      },
      {
        path: 'partners',
        component: PartnersComponent
      },
      {
        path: 'docs',
        component: DocsComponent
      },
      {
        path: 'help',
        component: HelpComponent
      },
      {
        path: 'cabinet',
        component: CabinetComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'profile'
          },
          {
            path: 'verification',
            component: VerificationComponent
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
      },
    ]
  }
];

@NgModule({
  declarations: [
    AsideComponent,
    FooterComponent,
    WalletComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    InlineSVGModule.forRoot(),
    CommonModule
  ],
  providers: [],
  exports: [
    AsideComponent,
    FooterComponent,
    WalletComponent
  ],
  bootstrap: []
})


export class BlocksModule { }
