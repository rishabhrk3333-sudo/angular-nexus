import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileWarning } from './mobile-warning';

describe('MobileWarning', () => {
  let component: MobileWarning;
  let fixture: ComponentFixture<MobileWarning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileWarning],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileWarning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
