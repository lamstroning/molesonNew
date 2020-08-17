import { Component, OnInit } from '@angular/core';
import {FranchisesModel, FranchisesService} from '../../../../core/franchises';

@Component({
  selector: 'app-top-franchises',
  templateUrl: './top-franchises.component.html',
  styleUrls: ['./top-franchises.component.scss']
})
export class TopFranchisesComponent implements OnInit {

  franchises: FranchisesModel[] = [];
  constructor(private franchisesService: FranchisesService) { }

  ngOnInit() {
    this.franchisesService.getFranchises('key').subscribe(res => {
      // console.log(res);
      // for (const item of res.data) {
      //   this.franchises.push(new FranchisesModel(item));
      // }
      this.franchises.push(new FranchisesModel(res));
    }, err => {
      console.warn(err);
    });
  }

  // getColor(status: string) {
  //   if (status === 'Сбор инвестиций' || status === 'Запуск') {
  //     return ('#ff9f19');
  //   } else if (status === 'В работе') {
  //     return ('#31B984');
  //   }
  // }
}

