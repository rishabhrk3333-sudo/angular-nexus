import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCopilerPage } from './angular-copiler-page';

describe('AngularCopilerPage', () => {
  let component: AngularCopilerPage;
  let fixture: ComponentFixture<AngularCopilerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularCopilerPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularCopilerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
