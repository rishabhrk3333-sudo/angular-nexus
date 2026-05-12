import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsPage } from './components-page';

describe('ComponentsPage', () => {
  let component: ComponentsPage;
  let fixture: ComponentFixture<ComponentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
