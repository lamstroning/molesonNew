import {Component, OnInit} from '@angular/core';
import {FranchisesModel, FranchisesService} from '../../../../core/franchises';

@Component({
  selector: 'app-franchises-block-catalog',
  templateUrl: './franchises-block-catalog.component.html',
  styleUrls: ['./franchises-block-catalog.component.scss']
})
export class FranchisesBlockCatalogComponent implements OnInit {
  franchises: FranchisesModel[];
  constructor(public franchisesService: FranchisesService) { }


  ngOnInit() {
    this.franchisesService.filterFranchises();
  }

}
