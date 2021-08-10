import { TestBed } from '@angular/core/testing';

import { ShowAllRequestService } from './show-all-request.service';

describe('ShowAllRequestService', () => {
  let service: ShowAllRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowAllRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
