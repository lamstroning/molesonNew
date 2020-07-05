import { Component, OnInit } from '@angular/core';
import {FranchisesModel} from '../../../../core/franchises/_models/franchises.model';
import {FranchisesService} from '../../../../core/franchises/franchises.service';

@Component({
  selector: 'app-top-franchises',
  templateUrl: './top-franchises.component.html',
  styleUrls: ['./top-franchises.component.scss']
})
export class TopFranchisesComponent implements OnInit {

  franchises: FranchisesModel[];
  constructor(private franchisesService: FranchisesService) { }

  ngOnInit() {
    this.franchises = this.franchisesService.franchisesList;
  }

  getColor(status: string) {
    if (status === 'Сбор инвестиций' || status === 'Запуск') {
      return ('#ff9f19');
    } else if (status === 'В работе') {
      return ('#31B984');
    }
  }
}

