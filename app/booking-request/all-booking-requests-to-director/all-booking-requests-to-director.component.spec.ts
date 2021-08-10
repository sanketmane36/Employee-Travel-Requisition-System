import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookingRequestsToDirectorComponent } from './all-booking-requests-to-director.component';

describe('AllBookingRequestsToDirectorComponent', () => {
  let component: AllBookingRequestsToDirectorComponent;
  let fixture: ComponentFixture<AllBookingRequestsToDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBookingRequestsToDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBookingRequestsToDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
