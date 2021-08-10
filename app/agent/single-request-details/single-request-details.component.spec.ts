import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRequestDetailsComponent } from './single-request-details.component';

describe('SingleRequestDetailsComponent', () => {
  let component: SingleRequestDetailsComponent;
  let fixture: ComponentFixture<SingleRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRequestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
