import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisesMyStatComponent } from './franchises-my-stat.component';

describe('FranchisesProgressComponent', () => {
  let component: FranchisesMyStatComponent;
  let fixture: ComponentFixture<FranchisesMyStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisesMyStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisesMyStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
