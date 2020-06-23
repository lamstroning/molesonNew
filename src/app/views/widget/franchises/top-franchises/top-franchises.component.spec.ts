import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFranchisesComponent } from './top-franchises.component';

describe('TopFranchisesComponent', () => {
  let component: TopFranchisesComponent;
  let fixture: ComponentFixture<TopFranchisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFranchisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFranchisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
