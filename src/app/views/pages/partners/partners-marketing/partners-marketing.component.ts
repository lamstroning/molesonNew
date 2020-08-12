import { Component, OnInit } from '@angular/core';
import {FranchisesModel, FranchisesService} from '../../../../core/franchises';
import {TokenService} from '../../../../core/token/token.service';

@Component({
  selector: 'app-partners-marketing',
  templateUrl: './partners-marketing.component.html',
  styleUrls: ['../partners-analytics/partners-analytics.component.scss']
})
export class PartnersMarketingComponent implements OnInit {
  public width: number;
  constructor(public tokenService: TokenService) { }

  ngOnInit() {
    this.width = window.innerWidth;
  }

}
