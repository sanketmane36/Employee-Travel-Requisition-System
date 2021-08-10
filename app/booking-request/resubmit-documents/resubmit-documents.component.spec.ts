import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResubmitDocumentsComponent } from './resubmit-documents.component';

describe('ResubmitDocumentsComponent', () => {
  let component: ResubmitDocumentsComponent;
  let fixture: ComponentFixture<ResubmitDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResubmitDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResubmitDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
