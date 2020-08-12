import {Component, OnInit} from '@angular/core';
import {FranchisesService} from '../../../../core/franchises';
import {FranchisesModel} from '../../../../core/franchises';

@Component({
  selector: 'app-my-franchises',
  templateUrl: './my-franchises.component.html',
  styleUrls: ['./my-franchises.component.scss']
})

export class MyFranchisesComponent implements OnInit {
  franchises: FranchisesModel[] = [];
  constructor(private franchisesService: FranchisesService) { }

  ngOnInit() {
    this.franchisesService.getFranchises('my').subscribe(res => {
      this.franchises.push(new FranchisesModel(res));
    }, err => {
      console.warn(err);
    });
  }
}

