import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisesPaymentComponent } from './franchises-payment.component';

describe('FranchisesPaymentComponent', () => {
  let component: FranchisesPaymentComponent;
  let fixture: ComponentFixture<FranchisesPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisesPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisesPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
