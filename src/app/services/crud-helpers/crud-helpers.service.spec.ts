import { TestBed } from '@angular/core/testing';

import { CrudHelpersService } from './crud-helpers.service';

describe('CrudHelpersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudHelpersService = TestBed.get(CrudHelpersService);
    expect(service).toBeTruthy();
  });
});
