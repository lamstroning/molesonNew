import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStageRegisterComponent } from './register-second.component';

describe('RegisterComponent', () => {
  let component: SecondStageRegisterComponent;
  let fixture: ComponentFixture<SecondStageRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondStageRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondStageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
