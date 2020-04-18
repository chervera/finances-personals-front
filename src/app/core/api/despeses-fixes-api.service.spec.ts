import { TestBed } from '@angular/core/testing';

import { DespesesFixesApiService } from './despeses-fixes-api.service';

describe('DespesesFixesApiService', () => {
  let service: DespesesFixesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DespesesFixesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
