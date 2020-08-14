import {NgModule} from '@angular/core';
import {BalanceComponent} from './balance/balance.component';
import {MyFranchisesComponent} from './franchises/my-franchises/my-franchises.component';
import {TopFranchisesComponent} from './franchises/top-franchises/top-franchises.component';
import {LastOperationsComponent} from './last-operations/last-operations.component';
import {SocialLinksComponent} from './social-links/social-links.component';
import {NewsWidgetComponent} from './news/news-widget.component';
import {AnaliticsComponent} from './analitics/analitics.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PerspectivesComponent} from './perspectives/perspectives.component';
import {NewsBreakingComponent} from './news-breaking/news-breaking.component';
import { NotificationComponent } from './notification/notification.component';
import {InlineSVGModule} from 'ng-inline-svg';
import { LoadingComponent } from './loading/loading.component';
import {MyWalletComponent} from '../pages/my-wallet/my-wallet.component';

@NgModule({
  declarations: [
    AnaliticsComponent,
    PerspectivesComponent,
    BalanceComponent,
    MyFranchisesComponent,
    TopFranchisesComponent,
    LastOperationsComponent,
    NewsWidgetComponent,
    SocialLinksComponent,
    NewsBreakingComponent,
    NotificationComponent,
    LoadingComponent,
    MyWalletComponent
  ],
    imports: [
        RouterModule,
        CommonModule,
        InlineSVGModule
    ],
  exports: [
    AnaliticsComponent,
    BalanceComponent,
    MyFranchisesComponent,
    TopFranchisesComponent,
    LastOperationsComponent,
    NewsWidgetComponent,
    SocialLinksComponent,
    PerspectivesComponent,
    NewsBreakingComponent,
    NotificationComponent,
    LoadingComponent,
    MyWalletComponent
  ]
})

export class WidgetModule {}
