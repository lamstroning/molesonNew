import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersStructComponent } from './partners-struct.component';

describe('PartnersStructComponent', () => {
  let component: PartnersStructComponent;
  let fixture: ComponentFixture<PartnersStructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersStructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
