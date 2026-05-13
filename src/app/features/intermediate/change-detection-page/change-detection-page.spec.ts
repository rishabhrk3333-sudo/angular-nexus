import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionPage } from './change-detection-page';

describe('ChangeDetectionPage', () => {
  let component: ChangeDetectionPage;
  let fixture: ComponentFixture<ChangeDetectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
