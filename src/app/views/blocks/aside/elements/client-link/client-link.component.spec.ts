import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLinkComponent } from './client-link.component';

describe('ClientLinkComponent', () => {
  let component: ClientLinkComponent;
  let fixture: ComponentFixture<ClientLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
