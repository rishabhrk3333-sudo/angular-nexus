import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceOptimizationPage } from './performance-optimization-page';

describe('PerformanceOptimizationPage', () => {
  let component: PerformanceOptimizationPage;
  let fixture: ComponentFixture<PerformanceOptimizationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceOptimizationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PerformanceOptimizationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
