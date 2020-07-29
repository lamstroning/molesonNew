import {Component, ContentChild, OnInit, ElementRef, ViewChild} from '@angular/core';
import {FranchisesService} from '../../../../core/franchises/_services/franchises.service';

@Component({
  selector: 'app-franchises-head',
  templateUrl: './franchises-head.component.html',
  styleUrls: ['./franchises-head.component.scss']
})
export class FranchisesHeadComponent implements OnInit {
  @ViewChild('changeCatalog', {static: true})
  change: ElementRef;
  constructor(public franchisesService: FranchisesService) { }

  ngOnInit() {

  }
  scrollSlider(filter: string) {

    this.franchisesService.filterType = filter;
    this.franchisesService.filterFranchises();
  }
  catalogChange(state: boolean) {
    const direct = state ? -5 : 5;
    this.franchisesService.catalogBlock = state;
    const scrollAnimation = setInterval(() => {
      this.change.nativeElement.scrollLeft += direct;
      console.log(this.change.nativeElement.scrollLeft);
      if (this.change.nativeElement.scrollLeft <= 0
        || this.change.nativeElement.scrollLeft >= 65) {
        clearInterval(scrollAnimation);
      }
    }, 10);
  }
}
