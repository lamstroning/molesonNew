import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
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
import { BalanceComponent } from './widget/balance/balance.component';
import { AnaliticsComponent } from './widget/analitics/analitics.component';
import { LastOperationsComponent } from './widget/last-operations/last-operations.component';
import { SocialLinksComponent } from './widget/social-links/social-links.component';
import { MyFranchisesComponent } from './widget/franchises/my-franchises/my-franchises.component';
import { TopFranchisesComponent } from './widget/franchises/top-franchises/top-franchises.component';
import {NewsWidgetComponent} from './widget/news/news-widget.component';
import {FranchisesService} from '../core/franchises/franchises.service';
import {BlocksModule} from './blocks/blocks.module';
import {HeaderModule} from './blocks/header/header.module';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import {AnalyticsModule} from './pages/analytics/analytics.module';
import { OperationsComponent } from './pages/operations/operations.component';
import {NewsModule} from './pages/news/news.module';
import {NewsDetailComponent} from './pages/news/news-detail/news-detail.component';
import {FranchisesModule} from './pages/franchises/franchises.module';
import {CabinetModule} from './pages/auth/cabinet/cabinet-module';
import {CabinetComponent} from './pages/auth/cabinet/cabinet.component';
import { WithdrawalComponent } from './pages/balance/withdrawal/withdrawal.component';
import {BalancePageComponent} from './pages/balance/balance.component';
import {BalancePageModule} from './pages/balance/balance-page.module';
import {PartnersAnalyticsComponent} from './pages/partners/partners-analytics/partners-analytics.component';
import { AuthComponent } from './pages/auth/auth/auth.component';
import { RegisterComponent } from './pages/auth/register/register.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NewsDetailComponent,
    ViewsComponent,
    MyWalletComponent,
    FranchisesComponent,
    CabinetComponent,
    NewsComponent,
    NewsWidgetComponent,
    PartnersComponent,
    DocsComponent,
    HelpComponent,
    BalanceComponent,
    AnaliticsComponent,
    LastOperationsComponent,
    SocialLinksComponent,
    MyFranchisesComponent,
    TopFranchisesComponent,
    AnalyticsComponent,
    OperationsComponent,
    PartnersAnalyticsComponent,
    WithdrawalComponent,
    BalancePageComponent,
    AuthComponent,
    RegisterComponent
  ],
    imports: [
        DashboardModule,
        BlocksModule,
        HttpClientModule,
        InlineSVGModule.forRoot(),
        CommonModule,
        HeaderModule,
        RouterModule,
        AnalyticsModule,
        NewsModule,
        CabinetModule,
        FranchisesModule,
        BalancePageModule,
        HelpModule
    ],
  providers: [FranchisesService],
  exports: [
    SocialLinksComponent,
    LastOperationsComponent
  ],
  bootstrap: []
})


export class ViewsModule { }
