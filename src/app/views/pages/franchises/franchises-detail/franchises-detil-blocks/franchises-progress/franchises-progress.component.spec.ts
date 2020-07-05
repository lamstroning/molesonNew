import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisesProgressComponent } from './franchises-progress.component';

describe('FranchisesProgressComponent', () => {
  let component: FranchisesProgressComponent;
  let fixture: ComponentFixture<FranchisesProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisesProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisesProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
