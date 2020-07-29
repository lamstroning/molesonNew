import {Component, OnInit} from '@angular/core';
import {FranchisesService} from '../../../../core/franchises';
import {FranchisesModel} from '../../../../core/franchises/_models/franchises.model';

@Component({
  selector: 'app-my-franchises',
  templateUrl: './my-franchises.component.html',
  styleUrls: ['./my-franchises.component.scss']
})

export class MyFranchisesComponent implements OnInit {

  franchises: FranchisesModel[];
  constructor(private franchisesService: FranchisesService) { }

  ngOnInit() {
    this.franchisesService.reloadList();
    this.franchises = this.franchisesService.franchisesList;
  }

}

