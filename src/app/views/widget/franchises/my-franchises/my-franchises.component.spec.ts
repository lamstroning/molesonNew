import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFranchisesComponent } from './my-franchises.component';

describe('MyFranchisesComponent', () => {
  let component: MyFranchisesComponent;
  let fixture: ComponentFixture<MyFranchisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFranchisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFranchisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
