import { Component, OnInit } from '@angular/core';
import {FranchisesService} from '../../../../core/franchises/_services/franchises.service';
import {FranchisesModel} from '../../../../core/franchises/_models/franchises.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-franchises-detail',
  templateUrl: './franchises-detail.component.html',
  styleUrls: ['./franchises-detail.component.scss']
})
export class FranchisesDetailComponent implements OnInit {

  currentFranchise: FranchisesModel;
  private subscription: Subscription;
  id: number;
  constructor(public franchisesService: FranchisesService,  private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params.id);
    this.currentFranchise = this.franchisesService.franchisesList.find(item => {
      return (item.id === +this.id);
    });
  }

}
