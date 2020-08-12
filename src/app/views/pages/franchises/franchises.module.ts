import {NgModule} from '@angular/core';
import {FranchisesHeadComponent} from './franchises-head/franchises-head.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {FranchisesBlockCatalogComponent} from './franchises-block-catalog/franchises-block-catalog.component';
import {FranchisesTableCatalogComponent} from './franchises-table-catalog/franchises-table-catalog.component';
import {FranchisesService} from '../../../core/franchises';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FranchisesDetailComponent} from './franchises-detail/franchises-detail.component';
import {AnalyticsModule} from '../analytics/analytics.module';
import {FranchisesIncomeComponent} from './franchises-detail/franchises-detil-blocks/franchises-income/franchises-income.component';
import {FranchisesProgressComponent} from './franchises-detail/franchises-detil-blocks/franchises-progress/franchises-progress.component';
import {FranchisesComponent} from './franchises.component';
import {WidgetModule} from '../../widget/widget.module';
import {FranchisesDetailModule} from './franchises-detail/franchises-detail.module';
import { FranchisesPaymentComponent } from './franchises-detail/franchises-payment/franchises-payment.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

const routes: Routes = [
  {
    path: '',
    component: FranchisesComponent,
  },
];

@NgModule({
  declarations: [
    FranchisesHeadComponent,
    FranchisesComponent,
    FranchisesBlockCatalogComponent,
    FranchisesTableCatalogComponent,
  ],

  imports: [
    InlineSVGModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    WidgetModule,
  ],
  providers: [FranchisesService],
  exports: [
    FranchisesHeadComponent,
    FranchisesBlockCatalogComponent,
    FranchisesTableCatalogComponent,
  ],
  bootstrap: []
})


export class FranchisesModule {
}
