import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../../../../core/token/token.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  constructor(public tokenService: TokenService) { }

  ngOnInit() {
  }

}
