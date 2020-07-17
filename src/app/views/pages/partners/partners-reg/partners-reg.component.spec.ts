import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersRegComponent } from './partners-reg.component';

describe('PartnersRegComponent', () => {
  let component: PartnersRegComponent;
  let fixture: ComponentFixture<PartnersRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
