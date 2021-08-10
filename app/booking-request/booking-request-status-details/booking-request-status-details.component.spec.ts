import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRequestStatusDetailsComponent } from './booking-request-status-details.component';

describe('BookingRequestStatusDetailsComponent', () => {
  let component: BookingRequestStatusDetailsComponent;
  let fixture: ComponentFixture<BookingRequestStatusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingRequestStatusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRequestStatusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
