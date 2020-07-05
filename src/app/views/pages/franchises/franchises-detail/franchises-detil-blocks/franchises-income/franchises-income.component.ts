import {Component, Input, OnInit} from '@angular/core';
import {FranchisesModel} from '../../../../../../core/franchises/_models/franchises.model';

@Component({
  selector: 'app-franchises-income',
  templateUrl: './franchises-income.component.html',
  styleUrls: ['./franchises-income.component.scss']
})
export class FranchisesIncomeComponent implements OnInit {
  @Input() franchise: FranchisesModel;
  constructor() { }

  ngOnInit() {
  }

}
