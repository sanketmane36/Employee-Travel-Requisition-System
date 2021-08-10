import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRequestStatusComponent } from './booking-request-status.component';

describe('BookingRequestStatusComponent', () => {
  let component: BookingRequestStatusComponent;
  let fixture: ComponentFixture<BookingRequestStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingRequestStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
