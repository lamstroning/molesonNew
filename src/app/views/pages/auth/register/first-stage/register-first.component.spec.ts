import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStageRegisterComponent } from './register-first.component';

describe('RegisterComponent', () => {
  let component: FirstStageRegisterComponent;
  let fixture: ComponentFixture<FirstStageRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStageRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
