import {Component, Input, OnInit} from '@angular/core';
import {FranchisesModel} from '../../../../../../core/franchises/_models/franchises.model';

@Component({
  selector: 'app-franchises-my-stat',
  templateUrl: './franchises-my-stat.component.html',
  styleUrls: ['./franchises-my-stat.component.scss']
})
export class FranchisesMyStatComponent implements OnInit {
  @Input() franchise: FranchisesModel;
  constructor() { }

  ngOnInit() {
  }

}
