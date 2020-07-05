import {Component, OnInit} from '@angular/core';
import {FranchisesModel} from '../../../../core/franchises/_models/franchises.model';
import {FranchisesService} from '../../../../core/franchises/franchises.service';

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
