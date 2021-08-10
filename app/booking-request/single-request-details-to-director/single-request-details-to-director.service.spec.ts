import { TestBed } from '@angular/core/testing';

import { SingleRequestDetailsToDirectorService } from './single-request-details-to-director.service';

describe('SingleRequestDetailsToDirectorService', () => {
  let service: SingleRequestDetailsToDirectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleRequestDetailsToDirectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
