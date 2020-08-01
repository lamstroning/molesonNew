import {Component, OnInit} from '@angular/core';
import {FranchisesService} from '../../../../core/franchises';
import {FranchisesModel} from '../../../../core/franchises';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-franchises-detail',
  templateUrl: './franchises-detail.component.html',
  styleUrls: ['./franchises-detail.component.scss']
})
export class FranchisesDetailComponent implements OnInit {

  currentFranchise: FranchisesModel;
  private subscription: Subscription;
  id: string;
  loading = true;

  constructor(public franchisesService: FranchisesService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.activateRoute.params.subscribe(params => this.id = params.id);
    const result = this.franchisesService.getFranchisesById(this.id, 'all');
    result.subscribe(
      res => {
        this.currentFranchise = new FranchisesModel(res);
        console.log(res);
      }, err => {
        console.warn(err);
      }, () => {
        this.loading = false;
      }
    );
  }
}
