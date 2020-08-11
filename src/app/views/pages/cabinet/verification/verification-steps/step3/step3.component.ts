import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../../../../core/token/token.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

  constructor(public tokenService: TokenService) { }

  ngOnInit() {
  }

}
