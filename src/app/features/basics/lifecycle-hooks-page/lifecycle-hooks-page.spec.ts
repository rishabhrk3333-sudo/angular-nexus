import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHooksPage } from './lifecycle-hooks-page';

describe('LifecycleHooksPage', () => {
  let component: LifecycleHooksPage;
  let fixture: ComponentFixture<LifecycleHooksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleHooksPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LifecycleHooksPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
