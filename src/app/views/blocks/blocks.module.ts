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
import {Step1Component} from '../pages/auth/cabinet/verification/verification-steps/step1/step1.component';
import {Step2Component} from '../pages/auth/cabinet/verification/verification-steps/step2/step2.component';
import {Step4Component} from '../pages/auth/cabinet/verification/verification-steps/step4/step4.component';
import {Step5Component} from '../pages/auth/cabinet/verification/verification-steps/step5/step5.component';
import {Step3Component} from '../pages/auth/cabinet/verification/verification-steps/step3/step3.component';
import {WithdrawalComponent} from '../pages/balance/withdrawal/withdrawal.component';
import {BalancePageComponent} from '../pages/balance/balance.component';
import { ClientStatusComponent } from './aside/elements/client-status/client-status.component';
import { MenuComponent } from './aside/elements/menu/menu.component';
import { ClientLinkComponent } from './aside/elements/client-link/client-link.component';
import { InviteComponent } from './aside/elements/invite/invite.component';
import {PartnersAnalyticsComponent} from '../pages/partners/partners-analytics/partners-analytics.component';
import {AuthComponent} from '../pages/auth/auth/auth.component';

const appRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
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
        component: PartnersComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'analytics'
          },
          {
            path: 'analytics',
            component: PartnersAnalyticsComponent
          },
        ]
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
        path: 'balance',
        component: BalancePageComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'withdrawal'
          },
          {
            path: 'withdrawal',
            component: WithdrawalComponent
          }
        ]
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
            component: VerificationComponent,
            children: [
              {
                path: '',
                pathMatch: 'full',
                redirectTo: 'step1'
              },
              {
                path: 'step1',
                component: Step1Component
              },
              {
                path: 'step2',
                component: Step2Component
              },
              {
                path: 'step3',
                component: Step3Component
              },
              {
                path: 'step4',
                component: Step4Component
              },
              {
                path: 'step5',
                component: Step5Component
              },
            ]
          },
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'settings',
            component: SettingsComponent
          },

        ]
      },
    ]
  }
];

@NgModule({
  declarations: [
    AsideComponent,
    FooterComponent,
    WalletComponent,
    ClientStatusComponent,
    MenuComponent,
    ClientLinkComponent,
    InviteComponent
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
