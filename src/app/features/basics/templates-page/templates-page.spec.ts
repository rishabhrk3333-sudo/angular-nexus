import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesPage } from './templates-page';

describe('TemplatesPage', () => {
  let component: TemplatesPage;
  let fixture: ComponentFixture<TemplatesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplatesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
