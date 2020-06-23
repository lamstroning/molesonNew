import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-analitics',
  templateUrl: './analitics.component.html',
  styleUrls: ['./analitics.component.scss']
})
export class AnaliticsComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  angle = 0;
  sum = 4000;
  rad = 20;
  private ctx: CanvasRenderingContext2D;
  constructor() { }

  ngOnInit() {
    // this.drawDiagram(700, 4);
  }
  drawDiagram(sum: number, count: number) {

    if (count === 0) {
      return ;
    }
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    const precent = sum / (this.sum / 100);
    const endAngl = Math.PI * 2 / 100 * precent;
    this.ctx.strokeStyle = '#' + this.getRandomArbitrary(0, 9) + this.getRandomArbitrary(0, 9) + this.getRandomArbitrary(0, 9);
    this.ctx.arc(150, 80, this.rad += 20, this.angle, endAngl, false);
    this.angle = endAngl;
    this.ctx.stroke();
    this.drawDiagram(sum , --count);
  }
  getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}
