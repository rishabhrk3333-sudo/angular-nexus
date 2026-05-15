import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrAndHydrationPage } from './ssr-and-hydration-page';

describe('SsrAndHydrationPage', () => {
  let component: SsrAndHydrationPage;
  let fixture: ComponentFixture<SsrAndHydrationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsrAndHydrationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SsrAndHydrationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
