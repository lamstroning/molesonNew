import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsRowComponent } from './stars-row.component';

describe('StarsRowComponent', () => {
  let component: StarsRowComponent;
  let fixture: ComponentFixture<StarsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
