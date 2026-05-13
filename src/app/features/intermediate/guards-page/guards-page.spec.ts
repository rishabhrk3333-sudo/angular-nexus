import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardsPage } from './guards-page';

describe('GuardsPage', () => {
  let component: GuardsPage;
  let fixture: ComponentFixture<GuardsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GuardsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
