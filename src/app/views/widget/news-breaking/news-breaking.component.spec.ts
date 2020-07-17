import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBreakingComponent } from './news-breaking.component';

describe('NewsBreakingComponent', () => {
  let component: NewsBreakingComponent;
  let fixture: ComponentFixture<NewsBreakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBreakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBreakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
