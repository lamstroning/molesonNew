import { NgModule } from '@angular/core';
import { FranchisesHeadComponent } from './franchises-head/franchises-head.component';
import {InlineSVGModule} from 'ng-inline-svg';
import { FranchisesBlockCatalogComponent } from './franchises-block-catalog/franchises-block-catalog.component';
import { FranchisesTableCatalogComponent } from './franchises-table-catalog/franchises-table-catalog.component';
import {FranchisesService} from '../../../core/franchises/franchises.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { FranchisesDetailComponent } from './franchises-detail/franchises-detail.component';
import {AnalyticsModule} from '../analytics/analytics.module';
import { FranchisesIncomeComponent } from './franchises-detail/franchises-detil-blocks/franchises-income/franchises-income.component';
import {FranchisesProgressComponent} from './franchises-detail/franchises-detil-blocks/franchises-progress/franchises-progress.component';


@NgModule({
  declarations: [

    FranchisesHeadComponent,

    FranchisesBlockCatalogComponent,

    FranchisesTableCatalogComponent,

    FranchisesDetailComponent,

    FranchisesProgressComponent,

    FranchisesIncomeComponent],

    imports: [
        InlineSVGModule,
        CommonModule,
        FormsModule,
        RouterModule,
        AnalyticsModule
    ],
  providers: [FranchisesService],
  exports: [
    FranchisesHeadComponent,
    FranchisesBlockCatalogComponent,
    FranchisesTableCatalogComponent
  ],
  bootstrap: []
})


export class FranchisesModule { }
