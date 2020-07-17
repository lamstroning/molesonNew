import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersAnalyticsComponent } from './partners-analytics.component';

describe('PartnersAnalyticsComponent', () => {
  let component: PartnersAnalyticsComponent;
  let fixture: ComponentFixture<PartnersAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
