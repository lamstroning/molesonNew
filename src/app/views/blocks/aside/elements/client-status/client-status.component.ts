import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../../../core/token/token.service';

@Component({
  selector: 'app-client-status',
  templateUrl: './client-status.component.html',
  styleUrls: ['./client-status.component.scss']
})
export class ClientStatusComponent implements OnInit {

  constructor(public tokenService: TokenService) { }

  ngOnInit() {
  }

}
