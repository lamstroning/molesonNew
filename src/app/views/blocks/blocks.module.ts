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

const appRoutes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
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
        path: 'news',
        component: NewsComponent
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
    ]
  }
];

@NgModule({
  declarations: [
    AsideComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    InlineSVGModule.forRoot(),
    CommonModule,
  ],
  providers: [],
  exports: [
    AsideComponent,
    FooterComponent
  ],
  bootstrap: []
})


export class BlocksModule { }
