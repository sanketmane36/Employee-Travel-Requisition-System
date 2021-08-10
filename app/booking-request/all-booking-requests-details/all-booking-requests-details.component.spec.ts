import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookingRequestsDetailsComponent } from './all-booking-requests-details.component';

describe('AllBookingRequestsDetailsComponent', () => {
  let component: AllBookingRequestsDetailsComponent;
  let fixture: ComponentFixture<AllBookingRequestsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBookingRequestsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBookingRequestsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
