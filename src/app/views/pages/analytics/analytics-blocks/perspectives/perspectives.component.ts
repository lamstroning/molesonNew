import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-perspectives',
  templateUrl: './perspectives.component.html',
  styleUrls: ['./perspectives.component.scss']
})
export class PerspectivesComponent implements OnInit {
  @Input() horizontal = false;
  constructor() { }

  ngOnInit() {
  }

}
