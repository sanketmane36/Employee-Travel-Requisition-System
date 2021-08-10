import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRequestDetailsToDirectorComponent } from './single-request-details-to-director.component';

describe('SingleRequestDetailsToDirectorComponent', () => {
  let component: SingleRequestDetailsToDirectorComponent;
  let fixture: ComponentFixture<SingleRequestDetailsToDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRequestDetailsToDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRequestDetailsToDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
