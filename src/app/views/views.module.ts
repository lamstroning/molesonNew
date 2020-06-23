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




@NgModule({
  declarations: [
    DashboardComponent,
    ViewsComponent,
    MyWalletComponent,
    FranchisesComponent,
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
  ],
  imports: [
    DashboardModule,
    BlocksModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    CommonModule,
    HeaderModule,
    RouterModule
  ],
  providers: [FranchisesService],
  bootstrap: []
})


export class ViewsModule { }
