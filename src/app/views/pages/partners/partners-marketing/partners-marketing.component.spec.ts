import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersMarketingComponent } from './partners-marketing.component';

describe('PartnersMarketingComponent', () => {
  let component: PartnersMarketingComponent;
  let fixture: ComponentFixture<PartnersMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
