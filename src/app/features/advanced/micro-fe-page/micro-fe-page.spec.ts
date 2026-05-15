import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFePage } from './micro-fe-page';

describe('MicroFePage', () => {
  let component: MicroFePage;
  let fixture: ComponentFixture<MicroFePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroFePage],
    }).compileComponents();

    fixture = TestBed.createComponent(MicroFePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
