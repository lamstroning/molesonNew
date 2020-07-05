import {Component, Input, OnInit} from '@angular/core';
import {FranchisesModel} from '../../../../../../core/franchises/_models/franchises.model';

@Component({
  selector: 'app-franchises-progress',
  templateUrl: './franchises-progress.component.html',
  styleUrls: ['./franchises-progress.component.scss']
})
export class FranchisesProgressComponent implements OnInit {
  @Input() franchise: FranchisesModel;
  constructor() { }

  ngOnInit() {
  }

}
