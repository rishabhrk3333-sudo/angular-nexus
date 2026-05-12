import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjectionPage } from './dependency-injection-page';

describe('DependencyInjectionPage', () => {
  let component: DependencyInjectionPage;
  let fixture: ComponentFixture<DependencyInjectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependencyInjectionPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DependencyInjectionPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
