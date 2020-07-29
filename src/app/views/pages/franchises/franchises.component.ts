import { Component, OnInit } from '@angular/core';
import {FranchisesService} from '../../../core/franchises/_services/franchises.service';

@Component({
  selector: 'app-franchises',
  templateUrl: './franchises.component.html',
  styleUrls: ['./franchises.component.scss']
})
export class FranchisesComponent implements OnInit {
  constructor(public franchisesService: FranchisesService) { }

  ngOnInit() {
  }

}
