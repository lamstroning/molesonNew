import { TestBed } from '@angular/core/testing';

import { FranchisesService } from './franchises.service';

describe('FranchisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FranchisesService = TestBed.get(FranchisesService);
    expect(service).toBeTruthy();
  });
});
