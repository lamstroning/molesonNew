import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisesBlockCatalogComponent } from './franchises-block-catalog.component';

describe('FranchisesBlockCatalogComponent', () => {
  let component: FranchisesBlockCatalogComponent;
  let fixture: ComponentFixture<FranchisesBlockCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisesBlockCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisesBlockCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
