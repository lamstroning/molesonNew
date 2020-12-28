import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  first = false;
  second = false;
  third = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  openDoc(url: string) {
    this.http.get(url).subscribe(res => {
      // console.log(res);
    });
    // window.open(url);
  }
}
