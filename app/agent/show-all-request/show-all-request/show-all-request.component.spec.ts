import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllRequestComponent } from './show-all-request.component';

describe('ShowAllRequestComponent', () => {
  let component: ShowAllRequestComponent;
  let fixture: ComponentFixture<ShowAllRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
