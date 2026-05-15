import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRenderersPage } from './custom-renderers-page';

describe('CustomRenderersPage', () => {
  let component: CustomRenderersPage;
  let fixture: ComponentFixture<CustomRenderersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomRenderersPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomRenderersPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
