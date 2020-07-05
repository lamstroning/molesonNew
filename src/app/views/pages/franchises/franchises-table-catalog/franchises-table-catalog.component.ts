import { Component, OnInit } from '@angular/core';
import {FranchisesModel} from '../../../../core/franchises/_models/franchises.model';
import {FranchisesService} from '../../../../core/franchises/franchises.service';

@Component({
  selector: 'app-franchises-table-catalog',
  templateUrl: './franchises-table-catalog.component.html',
  styleUrls: ['./franchises-table-catalog.component.scss']
})
export class FranchisesTableCatalogComponent implements OnInit {
  constructor(public franchisesService: FranchisesService) { }

  ngOnInit() {
    this.franchisesService.filterFranchises();
  }
  getColor(status: string) {
    if (status === 'Сбор инвестиций' || status === 'Запуск') {
      return ('#ff9f19');
    } else if (status === 'В работе') {
      return ('#31B984');
    }
  }
}
