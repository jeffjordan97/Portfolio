import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionCvComponent } from './call-to-action-cv.component';

describe('CallToActionHireComponent', () => {
  let component: CallToActionCvComponent;
  let fixture: ComponentFixture<CallToActionCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionCvComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CallToActionCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
