import { TestBed } from '@angular/core/testing';

import { AllBookingRequestsDetailsService } from './all-booking-requests-details.service';

describe('AllBookingRequestsDetailsService', () => {
  let service: AllBookingRequestsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllBookingRequestsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
