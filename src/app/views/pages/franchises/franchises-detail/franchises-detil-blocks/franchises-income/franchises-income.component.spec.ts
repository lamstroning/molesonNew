import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisesIncomeComponent } from './franchises-income.component';

describe('FranchisesIncomeComponent', () => {
  let component: FranchisesIncomeComponent;
  let fixture: ComponentFixture<FranchisesIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisesIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisesIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
