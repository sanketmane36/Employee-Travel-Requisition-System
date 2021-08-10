import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingleRequestDirectorComponent } from './show-single-request-director.component';

describe('ShowSingleRequestDirectorComponent', () => {
  let component: ShowSingleRequestDirectorComponent;
  let fixture: ComponentFixture<ShowSingleRequestDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSingleRequestDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSingleRequestDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
