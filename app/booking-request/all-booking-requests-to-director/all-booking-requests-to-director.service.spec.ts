import { TestBed } from '@angular/core/testing';

import { AllBookingRequestsToDirectorService } from './all-booking-requests-to-director.service';

describe('AllBookingRequestsToDirectorService', () => {
  let service: AllBookingRequestsToDirectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllBookingRequestsToDirectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
