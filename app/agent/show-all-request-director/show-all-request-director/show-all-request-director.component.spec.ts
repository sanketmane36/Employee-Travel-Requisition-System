import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllRequestDirectorComponent } from './show-all-request-director.component';

describe('ShowAllRequestDirectorComponent', () => {
  let component: ShowAllRequestDirectorComponent;
  let fixture: ComponentFixture<ShowAllRequestDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllRequestDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllRequestDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
