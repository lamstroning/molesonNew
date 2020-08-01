import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnChanges {
  @Input() type: string;
  @Input() text: string;
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges() {

  }
}
