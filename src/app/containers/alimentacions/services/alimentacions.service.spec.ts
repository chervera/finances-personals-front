import { TestBed } from '@angular/core/testing';

import { AlimentacionsService } from './alimentacions.service';

describe('AlimentacionsService', () => {
  let service: AlimentacionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimentacionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
