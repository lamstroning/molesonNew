import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisesDetailComponent } from './franchises-detail.component';

describe('FranchisesDetailComponent', () => {
  let component: FranchisesDetailComponent;
  let fixture: ComponentFixture<FranchisesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
