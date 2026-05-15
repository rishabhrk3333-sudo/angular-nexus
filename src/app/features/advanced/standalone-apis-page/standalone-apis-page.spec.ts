import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneApisPage } from './standalone-apis-page';

describe('StandaloneApisPage', () => {
  let component: StandaloneApisPage;
  let fixture: ComponentFixture<StandaloneApisPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneApisPage],
    }).compileComponents();

    fixture = TestBed.createComponent(StandaloneApisPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
