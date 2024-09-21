import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionHireComponent } from './call-to-action-hire.component';

describe('CallToActionHireComponent', () => {
  let component: CallToActionHireComponent;
  let fixture: ComponentFixture<CallToActionHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionHireComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CallToActionHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
