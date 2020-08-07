import { Component, OnInit } from '@angular/core';
import {FranchisesModel, FranchisesService} from '../../../../core/franchises';

@Component({
  selector: 'app-partners-marketing',
  templateUrl: './partners-marketing.component.html',
  styleUrls: ['../partners-analytics/partners-analytics.component.scss']
})
export class PartnersMarketingComponent implements OnInit {
  private width: number;
  constructor() { }

  ngOnInit() {
    this.width = window.innerWidth;
  }

}
