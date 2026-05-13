import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorsPage } from './interceptors-page';

describe('InterceptorsPage', () => {
  let component: InterceptorsPage;
  let fixture: ComponentFixture<InterceptorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterceptorsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(InterceptorsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
