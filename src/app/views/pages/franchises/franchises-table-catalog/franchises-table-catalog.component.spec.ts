import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisesTableCatalogComponent } from './franchises-table-catalog.component';

describe('FranchisesTableCatalogComponent', () => {
  let component: FranchisesTableCatalogComponent;
  let fixture: ComponentFixture<FranchisesTableCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisesTableCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisesTableCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
