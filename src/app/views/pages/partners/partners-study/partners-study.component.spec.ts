import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersStudyComponent } from './partners-study.component';

describe('PartnersStudyComponent', () => {
  let component: PartnersStudyComponent;
  let fixture: ComponentFixture<PartnersStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
