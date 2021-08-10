import { TestBed } from '@angular/core/testing';

import { ViewBookedTicketsService } from './view-booked-tickets.service';

describe('ViewBookedTicketsService', () => {
  let service: ViewBookedTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewBookedTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
