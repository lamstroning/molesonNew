import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './bloks/header/header.component';
import { FooterComponent } from './bloks/footer/footer.component';
import { AsideComponent } from './bloks/aside/aside.component';
import {ViewsComponent} from './views.component';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {InlineSVGModule} from 'ng-inline-svg';
import { MyWalletComponent } from './pages/my-wallet/my-wallet.component';
import { FranchisesComponent } from './pages/franchises/franchises.component';
import { NewsComponent } from './pages/news/news.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { DocsComponent } from './pages/docs/docs.component';
import { HelpComponent } from './pages/help/help.component';
import {HelpModule} from './pages/help/help.module';

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
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ViewsComponent,
    MyWalletComponent,
    FranchisesComponent,
    NewsComponent,
    PartnersComponent,
    DocsComponent,
    HelpComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    DashboardModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    RouterModule.forChild(appRoutes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})


export class ViewsModule { }
