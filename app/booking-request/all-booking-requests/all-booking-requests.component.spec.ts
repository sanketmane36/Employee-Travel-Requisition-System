import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookingRequestsComponent } from './all-booking-requests.component';

describe('AllBookingRequestsComponent', () => {
  let component: AllBookingRequestsComponent;
  let fixture: ComponentFixture<AllBookingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBookingRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBookingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
