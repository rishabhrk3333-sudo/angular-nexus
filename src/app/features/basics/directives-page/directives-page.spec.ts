import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesPage } from './directives-page';

describe('DirectivesPage', () => {
  let component: DirectivesPage;
  let fixture: ComponentFixture<DirectivesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectivesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
