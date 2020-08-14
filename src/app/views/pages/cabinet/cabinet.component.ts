import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../core/token/token.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

  constructor(public tokenService: TokenService) { }

  ngOnInit() {
  }

}
