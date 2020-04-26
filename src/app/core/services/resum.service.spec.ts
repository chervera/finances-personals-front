import { TestBed } from '@angular/core/testing';

import { ResumService } from './resum.service';

describe('ResumService', () => {
  let service: ResumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
