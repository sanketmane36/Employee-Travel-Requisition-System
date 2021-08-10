import { TestBed } from '@angular/core/testing';

import { BookingRequestStatusDetailsService } from './booking-request-status-details.service';

describe('BookingRequestStatusDetailsService', () => {
  let service: BookingRequestStatusDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingRequestStatusDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
