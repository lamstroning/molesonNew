import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmoneyComponent } from './webmoney.component';

describe('WebmoneyComponent', () => {
  let component: WebmoneyComponent;
  let fixture: ComponentFixture<WebmoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebmoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
