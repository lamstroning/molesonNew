import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisesHeadComponent } from './franchises-head.component';

describe('FranchisesHeadComponent', () => {
  let component: FranchisesHeadComponent;
  let fixture: ComponentFixture<FranchisesHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisesHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisesHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
