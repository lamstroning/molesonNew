import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';

const scrolling = (scrollBar, direct, endScroll, element) => {
  scrollBar += direct;
  if ((direct < 0 && scrollBar <= endScroll) || (direct > 0) && scrollBar >= endScroll) {
    element.scrollLeft = endScroll;
    return ;
  }
  element.scrollLeft = scrollBar;
  setTimeout(scrolling, 1, scrollBar, direct, endScroll, element);
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  @ViewChild('slider', { static: false }) slider: ElementRef;


  width;
  btnId = 0;
  constructor() { }
  ngOnInit() {
    this.width = window.innerWidth;
  }
  switchBtn(el: any) {
    if (el.scrollLeft < window.innerWidth) {
      this.btnId = 0;
    }
    if (el.scrollLeft >= window.innerWidth / 1.7) {
      this.btnId = 1;
    }
    if (el.scrollLeft >= window.innerWidth * 1.5) {
      this.btnId = 2;
    }
  }
  scrollSlider(id: number) {
    const scrollBar = this.slider.nativeElement.scrollLeft;
    const endScroll = id * (window.innerWidth - 15);
    const direct = scrollBar > endScroll ? -20 : 20;
    scrolling(scrollBar, direct, endScroll, this.slider.nativeElement);
    // console.log(this.slider);
  }
  // Изменение размера окна
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
  }

}
